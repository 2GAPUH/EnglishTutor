"use client";

import { useState, useEffect, useCallback } from "react";
import { useTutorStore } from "@/store/tutor-store";
import { ProgressSidebar } from "@/components/tutor/progress-sidebar";
import { TheoryPanel } from "@/components/tutor/theory-panel";
import { TestSetupPanel } from "@/components/tutor/test-setup-panel";
import { ExercisePanel, CompletePanel } from "@/components/tutor/exercise-panel";
import { BlockedPanel } from "@/components/tutor/blocked-panel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  GraduationCap,
  RotateCcw,
  Menu,
} from "lucide-react";
import { toast } from "sonner";

export default function TutorPage() {
  const {
    currentView,
    setView,
    setCurrentTense,
    setProgressMap,
    loadFrozen,
    sidebarOpen,
    setSidebarOpen,
  } = useTutorStore();

  const [isLoading, setIsLoading] = useState(true);

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

  // Reset all progress
  const handleResetAll = async () => {
    if (!confirm("Сбросить весь прогресс? Это действие необратимо.")) return;
    try {
      await fetch("/api/tutor/reset", { method: "POST" });
      toast.success("Весь прогресс сброшен");
      loadAll();
    } catch (_err) {
      toast.error("Не удалось сбросить прогресс");
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex items-center justify-between h-14 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Меню">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Программа обучения</SheetTitle>
                <ProgressSidebar />
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight">British English Tutor</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">12 времён • Британский английский</p>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetAll}
            className="gap-1.5 text-xs text-muted-foreground h-8"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Сбросить</span>
          </Button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex">
        <aside className="hidden md:block w-[280px] border-r bg-card/50 shrink-0">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
            <ProgressSidebar />
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-8">
              {currentView === "theory" && <TheoryPanel />}
              {currentView === "setup" && <TestSetupPanel />}
              {currentView === "exercise" && <ExercisePanel />}
              {currentView === "complete" && <CompletePanel />}
              {currentView === "blocked" && <BlockedPanel />}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

