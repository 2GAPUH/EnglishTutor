"use client";

import { useState, useMemo } from "react";
import { getTenseData, type TenseId } from "@/lib/tutor-data";
import { useTutorStore } from "@/store/tutor-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  PenLine,
  Play,
  Snowflake,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const COUNT_OPTIONS = [5, 10, 15, 20, 25, 30];

interface TestSetupPanelProps {
  className?: string;
}

export function TestSetupPanel({ className }: TestSetupPanelProps) {
  const {
    currentTense,
    exerciseCount,
    setExerciseCount,
    setSelectedExercises,
    setView,
    resetAnswers,
    frozenIds,
    freezeExercises,
    unfreezeTense,
  } = useTutorStore();

  const tenseData = getTenseData(currentTense);
  const totalPool = tenseData.exercises.length;
  const frozen = frozenIds[currentTense] || [];
  const available = Math.max(0, totalPool - frozen.length);
  const [shuffling, setShuffling] = useState(false);

  const handleStart = () => {
    if (exerciseCount > available) return;

    const frozenSet = new Set(frozen);
    const availableExercises = tenseData.exercises.filter((e) => !frozenSet.has(e.id));

    // Shuffle and pick
    const shuffled = [...availableExercises].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, exerciseCount);

    // Freeze selected exercises
    freezeExercises(currentTense, selected.map((e) => e.id));
    setSelectedExercises(selected);
    resetAnswers();
    setShuffling(true);
    setTimeout(() => {
      setShuffling(false);
      setView("exercise");
    }, 300);
  };

  const handleUnfreeze = () => {
    if (!confirm(`Сбросить все замороженные задания для ${tenseData.nameRu}?`)) return;
    unfreezeTense(currentTense);
  };

  const canStart = exerciseCount <= available && available > 0;

  return (
    <div className={cn("space-y-5", className)}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          <PenLine className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Практика</h1>
          <p className="text-sm text-muted-foreground">{tenseData.nameEn}</p>
        </div>
      </div>

      {/* Pool info */}
      <Card>
        <CardContent className="py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Snowflake className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Пул заданий</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">
                {available} из {totalPool} доступно
              </Badge>
              {frozen.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleUnfreeze}
                  className="gap-1.5 text-xs text-destructive hover:text-destructive h-7"
                >
                  <Trash2 className="h-3 w-3" />
                  Сбросить пул
                </Button>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-500"
              style={{ width: `${totalPool > 0 ? (available / totalPool) * 100 : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Доступно: {available}</span>
            <span>Заморожено: {frozen.length}</span>
          </div>
        </CardContent>
      </Card>

      {/* Exercise count selection */}
      <Card>
        <CardContent className="py-5">
          <h3 className="text-sm font-semibold mb-4">Сколько заданий вы хотите решить?</h3>
          <RadioGroup
            value={String(exerciseCount)}
            onValueChange={(val) => setExerciseCount(Number(val))}
            className="grid grid-cols-3 sm:grid-cols-6 gap-2"
          >
            {COUNT_OPTIONS.map((count) => {
              const disabled = count > available;
              return (
                <Label
                  key={count}
                  htmlFor={`count-${count}`}
                  className={cn(
                    "flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-colors text-center",
                    !disabled && Number(exerciseCount) === count && "border-primary bg-primary/5",
                    !disabled && "hover:border-primary/30 hover:bg-muted/50",
                    disabled && "text-muted-foreground/40 cursor-not-allowed border-dashed"
                  )}
                >
                  <RadioGroupItem value={String(count)} id={`count-${count}`} className="sr-only" disabled={disabled} />
                  <span className={cn("text-sm font-semibold", disabled && "line-through")}>
                    {count}
                  </span>
                </Label>
              );
            })}
          </RadioGroup>
          {exerciseCount > available && (
            <div className="flex items-center gap-2 mt-3 text-xs text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Недостаточно доступных заданий. Сбросьте пул или выберите меньше.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Exercise type breakdown */}
      <Card>
        <CardContent className="py-5">
          <h3 className="text-sm font-semibold mb-3">Типы заданий в пуле:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {(
              [
                { type: "multiple_choice", label: "Выбор ответа", color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
                { type: "fill_blank", label: "Вставить слово", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
                { type: "translate_ru_en", label: "Перевод RU→EN", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
              ] as const
            ).map(({ type, label, color }) => {
              const total = tenseData.exercises.filter((e) => e.type === type).length;
              const frozenCount = tenseData.exercises.filter(
                (e) => e.type === type && frozen.includes(e.id)
              ).length;
              return (
                <div key={type} className="flex items-center justify-between p-2.5 rounded-md bg-muted/50">
                  <Badge variant="secondary" className={cn("text-xs", color)}>
                    {label}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {total - frozenCount}/{total}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Start button */}
      <div className="flex justify-end pt-2">
        <Button
          onClick={handleStart}
          size="lg"
          disabled={!canStart || shuffling}
          className="gap-2 min-w-[200px]"
        >
          {shuffling ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              Выбираем задания...
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Начать тест ({exerciseCount} заданий)
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
