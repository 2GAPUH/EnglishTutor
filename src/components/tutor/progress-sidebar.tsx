"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BLOCKS, TENSE_NAMES, type TenseId } from "@/lib/tutor-data";
import { useTutorStore, type TenseProgressInfo } from "@/store/tutor-store";
import { CheckCircle2, Circle, Lock, BookOpen, PenLine, Trophy, Award } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProgressSidebarProps {
  className?: string;
}

export function ProgressSidebar({ className }: ProgressSidebarProps) {
  const { currentTense, progressMap, setCurrentTense } = useTutorStore();

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
              onSelectTense={setCurrentTense}
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
                <button
                  onClick={() => {
                    if (!isLocked) onSelectTense(tenseId);
                  }}
                  disabled={isLocked}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors",
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
                  <span className="text-left truncate">{TENSE_NAMES[tenseId]?.ru || tenseId}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      )}
      <Separator className="my-2" />
    </div>
  );
}

function isTenseUnlocked(tenseId: TenseId, allTenseIds: TenseId[], progressMap: Record<string, TenseProgressInfo>): boolean {
  const idx = allTenseIds.indexOf(tenseId);
  if (idx === 0) return true;
  const prevTenseId = allTenseIds[idx - 1];
  return !!progressMap[prevTenseId]?.theoryDone;
}
