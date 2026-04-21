"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BLOCKS, TENSE_NAMES, type TenseId } from "@/lib/tutor-data";
import { useTutorStore, type TenseProgressInfo } from "@/store/tutor-store";
import { CheckCircle2, Circle, Lock, BookOpen, PenLine, Trophy, Award, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";

interface ProgressSidebarProps {
  className?: string;
  onSelectTense?: (tenseId: string) => void;
}

export function ProgressSidebar({ className, onSelectTense }: ProgressSidebarProps) {
  const { currentTense, progressMap, setCurrentTense } = useTutorStore();

  const handleSelect = (tenseId: TenseId) => {
    if (onSelectTense) {
      onSelectTense(tenseId);
    } else {
      setCurrentTense(tenseId);
    }
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold tracking-tight">Программа обучения</h2>
        <p className="text-sm text-muted-foreground mt-1">12 времён английского</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          {BLOCKS.map((block, blockIdx) => (
            <BlockSection
              key={block.id}
              blockId={block.id}
              blockName={block.nameRu}
              tenseIds={block.tenses}
              currentTense={currentTense}
              progressMap={progressMap}
              onSelectTense={handleSelect}
              isActive={block.tenses.includes(currentTense)}
              isUnlocked={blockIdx === 0 || !!progressMap[block.tenses[0]]?.theoryDone}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

interface BlockSectionProps {
  blockId: string;
  blockName: string;
  tenseIds: TenseId[];
  currentTense: TenseId;
  progressMap: Record<string, TenseProgressInfo>;
  onSelectTense: (tense: TenseId) => void;
  isActive: boolean;
  isUnlocked: boolean;
}

function BlockSection({
  blockName,
  tenseIds,
  currentTense,
  progressMap,
  onSelectTense,
  isActive,
  isUnlocked,
}: BlockSectionProps) {
  const completedCount = tenseIds.filter((t) => progressMap[t]?.completed).length;
  const [open, setOpen] = React.useState(isActive);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
          isActive && "bg-primary/5 text-primary",
          !isActive && "hover:bg-muted"
        )}
      >
        <span className="flex items-center gap-2">
          {completedCount === tenseIds.length ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          ) : (
            <Circle className="h-4 w-4 text-muted-foreground" />
          )}
          {blockName}
        </span>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {completedCount}/{tenseIds.length}
          </Badge>
          <svg
            className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-90")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-border pl-3">
          {tenseIds.map((tenseId, tIdx) => {
            const progress = progressMap[tenseId];
            const isCurrent = tenseId === currentTense;
            const isLocked = !isTenseUnlocked(tenseId, tenseIds, progressMap);
            const isFinalTest = tenseId === "present-final-test";

            return (
              <React.Fragment key={tenseId}>
                {isFinalTest && <Separator className="my-2 !border-dashed" />}
                <TenseButton
                  tenseId={tenseId}
                  isCurrent={isCurrent}
                  isLocked={isLocked}
                  isFinalTest={isFinalTest}
                  progress={progress}
                  onSelect={() => onSelectTense(tenseId)}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
      <Separator className="my-2" />
    </div>
  );
}

// Separate component for context menu
function TenseButton({
  tenseId,
  isCurrent,
  isLocked,
  isFinalTest,
  progress,
  onSelect,
}: {
  tenseId: TenseId;
  isCurrent: boolean;
  isLocked: boolean;
  isFinalTest: boolean;
  progress?: TenseProgressInfo;
  onSelect: () => void;
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [markDialogOpen, setMarkDialogOpen] = React.useState(false);
  const { markTenseStudied } = useTutorStore();
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close menu on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleMarkStudied = async () => {
    setMarkDialogOpen(false);
    setMenuOpen(false);
    try {
      // Mark theory as done via API
      await fetch("/api/tutor/theory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tense: tenseId }),
      });
      // Mark as completed via API
      await fetch("/api/tutor/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tense: tenseId }),
      });
      markTenseStudied(tenseId);
      toast.success(`${TENSE_NAMES[tenseId]?.ru || tenseId} отмечено как изученное`);
    } catch {
      toast.error("Не удалось пометить как изученное");
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (isLocked) return;
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={onSelect}
        onContextMenu={handleContextMenu}
        disabled={isLocked}
        className={cn(
          "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors group",
          isCurrent && !isFinalTest && "bg-primary text-primary-foreground",
          isCurrent && isFinalTest && "bg-amber-500 text-white",
          !isCurrent && !isLocked && !isFinalTest && "hover:bg-muted text-foreground",
          !isCurrent && !isLocked && isFinalTest && "hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-medium",
          isLocked && isFinalTest && "text-amber-400/30 dark:text-amber-600/30 cursor-not-allowed",
          isLocked && !isFinalTest && "text-muted-foreground/50 cursor-not-allowed"
        )}
      >
        {isFinalTest ? (
          isLocked ? (
            <Lock className="h-3.5 w-3.5 shrink-0" />
          ) : progress?.completed ? (
            <Trophy className="h-3.5 w-3.5 shrink-0 text-amber-500" />
          ) : (
            <Award className="h-3.5 w-3.5 shrink-0" />
          )
        ) : isLocked ? (
          <Lock className="h-3.5 w-3.5 shrink-0" />
        ) : progress?.completed ? (
          <Trophy className="h-3.5 w-3.5 shrink-0 text-amber-500" />
        ) : progress?.theoryDone ? (
          <PenLine className="h-3.5 w-3.5 shrink-0" />
        ) : isCurrent ? (
          <BookOpen className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        )}
        <span className="text-left truncate flex-1">{TENSE_NAMES[tenseId]?.ru || tenseId}</span>
        {/* Triple dot for context menu (visible on hover) */}
        {!isLocked && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="opacity-0 group-hover:opacity-100 h-4 w-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-opacity shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="2" cy="6" r="1.2" />
              <circle cx="6" cy="6" r="1.2" />
              <circle cx="10" cy="6" r="1.2" />
            </svg>
          </span>
        )}
      </button>

      {/* Context menu */}
      {menuOpen && (
        <div className="absolute right-0 top-full mt-1 z-50 bg-popover border rounded-md shadow-md py-1 min-w-[180px]">
          <button
            onClick={handleMarkStudied}
            disabled={!!progress?.completed}
            className={cn(
              "w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors text-left",
              progress?.completed
                ? "text-muted-foreground/40 cursor-not-allowed"
                : "hover:bg-muted text-foreground"
            )}
          >
            <Check className="h-3.5 w-3.5" />
            Пометить как изученное
          </button>
        </div>
      )}

      {/* Mark as studied confirmation */}
      <AlertDialog open={markDialogOpen} onOpenChange={setMarkDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Пометить как изученное?</AlertDialogTitle>
            <AlertDialogDescription>
              Тема <strong>{TENSE_NAMES[tenseId]?.ru || tenseId}</strong> будет отмечена как полностью изученная. Вы сможете сразу перейти к следующей теме.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={handleMarkStudied} className="gap-2">
              <Check className="h-4 w-4" />
              Да, пометить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function isTenseUnlocked(tenseId: TenseId, allTenseIds: TenseId[], progressMap: Record<string, TenseProgressInfo>): boolean {
  const idx = allTenseIds.indexOf(tenseId);
  if (idx === 0) return true;
  const prevTenseId = allTenseIds[idx - 1];
  return !!progressMap[prevTenseId]?.theoryDone;
}
