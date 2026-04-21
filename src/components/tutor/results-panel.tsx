"use client";

import { useTutorStore, type ExerciseResult } from "@/store/tutor-store";
import { getTenseData, getNextTense } from "@/lib/tutor-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Trophy,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BookOpen,
  PartyPopper,
  Target,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultsPanelProps {
  className?: string;
  onRetry: () => void;
}

export function ResultsPanel({ className, onRetry }: ResultsPanelProps) {
  const {
    currentTense,
    results,
    lastScore,
    lastTotal,
    goToNextTense,
    goToTheory,
    progressMap,
  } = useTutorStore();

  const tenseData = getTenseData(currentTense);
  const passed = lastScore >= Math.ceil(lastTotal * 0.7);
  const percentage = lastTotal > 0 ? Math.round((lastScore / lastTotal) * 100) : 0;
  const incorrectResults = results.filter((r) => !r.isCorrect);
  const correctResults = results.filter((r) => r.isCorrect);
  const nextTense = getNextTense(currentTense);
  const nextTenseData = nextTense ? getTenseData(nextTense) : null;

  const handleNext = () => {
    if (nextTense) {
      goToNextTense();
    }
  };

  return (
    <div className={cn("space-y-5", className)}>
      {/* Score card */}
      <Card className={cn(
        "border-2",
        passed ? "border-emerald-300 dark:border-emerald-700" : "border-amber-300 dark:border-amber-700"
      )}>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={cn(
              "flex items-center justify-center h-16 w-16 rounded-full",
              passed ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-amber-100 dark:bg-amber-900/30"
            )}>
              {passed ? (
                <PartyPopper className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Target className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {passed ? "Отлично! Тема закрыта! 🎉" : "Нужно повторить"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {passed
                  ? `${tenseData.nameRu} — вы набрали ${percentage}% и успешно прошли тему.`
                  : `${tenseData.nameRu} — ${percentage}% правильных ответов. Нужно минимум 70%.`}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className={cn(
                  "text-4xl font-bold",
                  passed ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
                )}>
                  {lastScore}/{lastTotal}
                </div>
                <p className="text-xs text-muted-foreground mt-1">правильных</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className={cn(
                  "text-4xl font-bold",
                  passed ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
                )}>
                  {percentage}%
                </div>
                <p className="text-xs text-muted-foreground mt-1">результат</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-foreground">
                  {progressMap[currentTense]?.attempts || 1}
                </div>
                <p className="text-xs text-muted-foreground mt-1">попытка</p>
              </div>
            </div>

            <div className="w-full max-w-md">
              <Progress
                value={percentage}
                className={cn(
                  "h-3",
                  passed && "[&>div]:bg-emerald-500",
                  !passed && "[&>div]:bg-amber-500"
                )}
              />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0%</span>
                <span className="text-amber-500 font-medium">70% минимум</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Correct answers summary */}
      {correctResults.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            Правильные ответы ({correctResults.length})
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {correctResults.map((r) => (
              <Badge key={r.exerciseIndex} variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                #{r.exerciseIndex}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Incorrect answers detail */}
      {incorrectResults.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-rose-600 dark:text-rose-400">
            <XCircle className="h-4 w-4" />
            Разбор ошибок ({incorrectResults.length})
          </h3>
          <ScrollArea className="max-h-[400px]">
            <div className="space-y-2 pr-3">
              {incorrectResults.map((r) => (
                <Card key={r.exerciseIndex} className="border-l-4 border-l-rose-400">
                  <CardContent className="py-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">
                        <span className="text-muted-foreground">#{r.exerciseIndex}</span> {r.question}
                      </p>
                      <Badge variant="secondary" className="text-xs shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400">
                        {r.exerciseType === "multiple_choice"
                          ? "Выбор"
                          : r.exerciseType === "translate_ru_en"
                          ? "Перевод"
                          : "Вставить"}
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-rose-600 dark:text-rose-400">
                        Ваш ответ: <span className="font-medium">{r.userAnswer || "(пусто)"}</span>
                      </p>
                      <p className="text-emerald-600 dark:text-emerald-400">
                        Правильно: <span className="font-medium">{r.correctAnswer}</span>
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground bg-muted/50 rounded-md p-2">
                      📖 {r.explanation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 pb-4 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          {!passed && (
            <Button variant="outline" onClick={onRetry} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Попробовать снова
            </Button>
          )}
          <Button variant="ghost" onClick={goToTheory} className="gap-2">
            <BookOpen className="h-4 w-4" />
            Перечитать теорию
          </Button>
        </div>

        {passed && nextTense && nextTenseData && (
          <Button onClick={handleNext} size="lg" className="gap-2">
            Следующая тема: {nextTenseData.nameRu}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}

        {passed && !nextTense && (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold">Все доступные темы пройдены!</span>
          </div>
        )}
      </div>
    </div>
  );
}
