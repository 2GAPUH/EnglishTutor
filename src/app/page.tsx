"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTutorStore } from "@/store/tutor-store";
import { ProgressSidebar } from "@/components/tutor/progress-sidebar";
import { TheoryPanel } from "@/components/tutor/theory-panel";
import { TestSetupPanel } from "@/components/tutor/test-setup-panel";
import { ExercisePanel, CompletePanel } from "@/components/tutor/exercise-panel";
import { BlockedPanel } from "@/components/tutor/blocked-panel";
import { IrregularVerbsPanel } from "@/components/tutor/irregular-verbs-panel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  GraduationCap,
  RotateCcw,
  Menu,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function TutorPage() {
  const {
    currentView,
    setView,
    setCurrentTense,
    setProgressMap,
    loadFrozen,
    sidebarOpen,
    setSidebarOpen,
    sidebarCollapsed,
    sidebarWidth,
    setSidebarWidth,
    toggleSidebarCollapsed,
    selectedExercises,
  } = useTutorStore();

  const [isLoading, setIsLoading] = useState(true);

  // Reset dialog state
  const [resetOpen, setResetOpen] = useState(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);

  // Tab switch warning dialog
  const [switchWarningOpen, setSwitchWarningOpen] = useState(false);
  const [pendingTense, setPendingTense] = useState<string | null>(null);

  // Sidebar resize
  const isResizing = useRef(false);
  const asideRef = useRef<HTMLDivElement>(null);

  // Load progress and frozen exercises on mount
  const loadAll = useCallback(async () => {
    try {
      const res = await fetch("/api/tutor/progress");
      if (res.ok) {
        const data = await res.json();
        setProgressMap(data.progressMap);
        setCurrentTense(data.currentTense);
        setView(data.currentView);
      }
      loadFrozen();
    } catch (err) {
      console.error("Failed to load:", err);
    } finally {
      setIsLoading(false);
    }
  }, [setProgressMap, setCurrentTense, setView, loadFrozen]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  // Sidebar resize handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = e.clientX;
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setSidebarWidth]);

  const startResize = (e: React.MouseEvent) => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    e.preventDefault();
  };

  // Unified sidebar toggle handler
  const handleSidebarToggle = () => {
    // On mobile (md and below), use Sheet
    if (window.innerWidth < 768) {
      setSidebarOpen(true);
    } else {
      // On desktop, toggle sidebar collapsed
      toggleSidebarCollapsed();
    }
  };

  // Reset: first dialog → second dialog → action
  const openResetDialog = () => setResetOpen(true);
  const handleFirstConfirm = () => {
    setResetOpen(false);
    setConfirmResetOpen(true);
  };
  const handleFinalReset = async () => {
    setConfirmResetOpen(false);
    try {
      const res = await fetch("/api/tutor/reset", { method: "POST" });
      if (!res.ok) {
        toast.error("Не удалось сбросить прогресс (ошибка сервера)");
        return;
      }
      // Clear localStorage frozen data
      localStorage.removeItem("tutor_frozen_exercises");
      // Fully reset client state
      useTutorStore.setState({
        progressMap: {},
        currentTense: "present-simple",
        currentView: "theory",
        selectedExercises: [],
        answers: {},
        exerciseCount: 10,
        frozenIds: {},
      });
      toast.success("Весь прогресс сброшен");
    } catch (_err) {
      toast.error("Не удалось сбросить прогресс");
    }
  };

  // Tab switch with warning
  const handleTenseSwitch = (tenseId: string) => {
    // Check if user is in the middle of a test
    const isInTest = (currentView === "exercise" || currentView === "complete") && selectedExercises.length > 0;
    if (isInTest) {
      setPendingTense(tenseId);
      setSwitchWarningOpen(true);
      return;
    }
    // Safe to switch (store handles the check)
    const result = setCurrentTense(tenseId as any);
    if (result === "in-progress") {
      setPendingTense(tenseId);
      setSwitchWarningOpen(true);
    }
  };

  const handleForceSwitch = () => {
    setSwitchWarningOpen(false);
    if (pendingTense) {
      useTutorStore.setState({
        currentTense: pendingTense as any,
        currentView: "theory",
        answers: {},
        selectedExercises: [],
        exerciseCount: 10,
      });
      setPendingTense(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground text-sm">Загрузка...</p>
        </div>
      </div>
    );
  }

  const isInTest = (currentView === "exercise" || currentView === "complete") && selectedExercises.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex items-center justify-between h-14 px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* Unified sidebar toggle button — left of logo */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label="Меню"
                  onClick={(e) => {
                    // On mobile, let Sheet handle it; on desktop, toggle collapsed
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                      toggleSidebarCollapsed();
                    }
                  }}
                >
                  <Menu className="h-4.5 w-4.5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Программа обучения</SheetTitle>
                <ProgressSidebar onSelectTense={handleTenseSwitch} />
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight">British English Tutor</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">12 времён • Британский английский</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isInTest && (
              <span className="hidden md:flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1 rounded-full">
                <AlertTriangle className="h-3 w-3" />
                Тест активен
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={openResetDialog}
              className="gap-1.5 text-xs text-muted-foreground h-8"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Сбросить</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex">
        {/* Desktop sidebar */}
        {!sidebarCollapsed && (
          <aside
            ref={asideRef}
            className="hidden md:flex flex-col border-r bg-card/50 shrink-0 relative"
            style={{ width: sidebarWidth }}
          >
            <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden">
              <ProgressSidebar onSelectTense={handleTenseSwitch} />
            </div>
            {/* Resize handle */}
            <div
              onMouseDown={startResize}
              className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-primary/30 active:bg-primary/50 transition-colors z-10"
            />
          </aside>
        )}

        <main className="flex-1 min-w-0">
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-8">
              {currentView === "theory" && <TheoryPanel />}
              {currentView === "setup" && <TestSetupPanel />}
              {currentView === "exercise" && <ExercisePanel />}
              {currentView === "complete" && <CompletePanel />}
              {currentView === "blocked" && <BlockedPanel />}
              {currentView === "irregular-verbs" && <IrregularVerbsPanel />}
            </div>
          </ScrollArea>
        </main>
      </div>

      {/* Reset Dialog — Step 1: Warning */}
      <AlertDialog open={resetOpen} onOpenChange={setResetOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              Сбросить прогресс?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Это действие удалит весь ваш прогресс обучения: пройденные темы, результаты тестов и замороженные задания. Отменить сброс будет невозможно.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={handleFirstConfirm} className="gap-2 bg-destructive text-white hover:bg-destructive/90">
              Да, хочу сбросить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reset Dialog — Step 2: Final confirmation */}
      <AlertDialog open={confirmResetOpen} onOpenChange={setConfirmResetOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Вы уверены?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Весь прогресс будет удалён навсегда. Вы уверены, что хотите продолжить?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Нет, оставить прогресс</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinalReset} className="gap-2 bg-destructive text-white hover:bg-destructive/90">
              Да, удалить всё
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Tab switch warning */}
      <AlertDialog open={switchWarningOpen} onOpenChange={setSwitchWarningOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Тест ещё не завершён
            </AlertDialogTitle>
            <AlertDialogDescription>
              У вас есть незавершённый тест. Если вы переключитесь на другую тему, текущие ответы будут потеряны.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Остаться в тесте</AlertDialogCancel>
            <AlertDialogAction onClick={handleForceSwitch} className="gap-2">
              Переключиться (потерять ответы)
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
