"use client";

import { useMemo } from "react";
import { useTutorStore } from "@/store/tutor-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PenLine, Send, Copy, Check, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import type { Exercise, ExerciseType } from "@/lib/tutor-data";

interface ExercisePanelProps {
  className?: string;
}

export function ExercisePanel({ className }: ExercisePanelProps) {
  const {
    selectedExercises,
    answers,
    setAnswer,
    setView,
    currentTense,
  } = useTutorStore();

  const answeredCount = Object.keys(answers).length;
  const totalCount = selectedExercises.length;

  const handleFinish = () => {
    if (answeredCount < totalCount) {
      toast.warning(`Ответьте на все вопросы (${answeredCount}/${totalCount})`);
      return;
    }
    setView("complete");
  };

  if (!selectedExercises.length) {
    return (
      <Card className={className}>
        <CardContent className="py-12 text-center text-muted-foreground">
          Нет выбранных заданий.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            <PenLine className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Тест</h1>
            <p className="text-sm text-muted-foreground">{totalCount} заданий</p>
          </div>
        </div>
        <Badge variant="outline" className="text-sm">
          {answeredCount}/{totalCount} ответов
        </Badge>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary rounded-full h-2 transition-all duration-500"
          style={{ width: `${totalCount > 0 ? (answeredCount / totalCount) * 100 : 0}%` }}
        />
      </div>

      {/* Exercises */}
      <div className="space-y-3">
        {selectedExercises.map((exercise, idx) => (
          <ExerciseCard
            key={exercise.id}
            index={idx + 1}
            exercise={exercise}
            value={answers[exercise.id] || ""}
            onChange={(val) => setAnswer(exercise.id, val)}
          />
        ))}
      </div>

      {/* Finish */}
      <div className="flex justify-end pt-4 pb-2">
        <Button
          onClick={handleFinish}
          size="lg"
          disabled={answeredCount < totalCount}
          className="gap-2 min-w-[180px]"
        >
          <Send className="h-4 w-4" />
          Завершить тест
        </Button>
      </div>
    </div>
  );
}

// ---------- Complete Panel with Copy ----------

interface CompletePanelProps {
  className?: string;
}

export function CompletePanel({ className }: CompletePanelProps) {
  const { selectedExercises, answers, setView, currentTense, resetAnswers } = useTutorStore();
  const [copied, setCopied] = useState(false);

  const copyText = useMemo(() => {
    const lines = [
      `Тест: ${currentTense.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
      `Всего заданий: ${selectedExercises.length}`,
      "",
    ];

    selectedExercises.forEach((ex, idx) => {
      const userAnswer = answers[ex.id] || "(не отвечено)";
      const typeLabel =
        ex.type === "multiple_choice"
          ? "Выбор ответа"
          : ex.type === "fill_blank"
          ? "Вставить слово"
          : "Перевод RU→EN";

      lines.push(`Задание ${idx + 1} [${typeLabel}]:`);
      lines.push(`  Вопрос: ${ex.question}`);

      if (ex.options) {
        lines.push(`  Варианты: ${ex.options.join(" / ")}`);
      }

      lines.push(`  Мой ответ: ${userAnswer}`);
      lines.push("");
    });

    return lines.join("\n");
  }, [selectedExercises, answers, currentTense]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      toast.success("Ответы скопированы! Отправьте их нейросети для проверки.");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = copyText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      toast.success("Ответы скопированы!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleRetry = () => {
    resetAnswers();
    setView("setup");
  };

  return (
    <div className={cn("space-y-5", className)}>
      {/* Score */}
      <Card className="border-2 border-primary/20">
        <CardContent className="py-6 text-center space-y-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mx-auto">
            <Check className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Тест завершён!</h2>
            <p className="text-muted-foreground mt-1">
              Скопируйте ваши ответы и отправьте их нейросети для проверки.
            </p>
          </div>
          <div className="text-4xl font-bold text-primary">
            {selectedExercises.length} заданий
          </div>
        </CardContent>
      </Card>

      {/* Answers preview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Ваши ответы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 max-h-[300px] overflow-y-auto space-y-2 text-sm font-mono">
            {selectedExercises.map((ex, idx) => (
              <div key={ex.id} className="border-b border-border/50 pb-2 last:border-b-0 last:pb-0">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">#{idx + 1}</span>{" "}
                  {ex.question}
                </p>
                <p className="text-primary mt-0.5">
                  → {answers[ex.id] || "(пусто)"}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between flex-wrap gap-3 pt-2 pb-4">
        <Button variant="outline" onClick={handleRetry} className="gap-2">
          <PenLine className="h-4 w-4" />
          Новый тест
        </Button>
        <Button onClick={handleCopy} size="lg" className="gap-2 min-w-[200px]">
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Скопировано!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Копировать ответы
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

// ---------- Individual Exercise Card ----------

interface ExerciseCardProps {
  index: number;
  exercise: Exercise;
  value: string;
  onChange: (val: string) => void;
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ExerciseCard({ index, exercise, value, onChange }: ExerciseCardProps) {
  const [hintOpen, setHintOpen] = useState(false);

  const typeLabel: Record<ExerciseType, { label: string; color: string }> = {
    multiple_choice: { label: "Выбор", color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
    translate_ru_en: { label: "Перевод", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
    fill_blank: { label: "Вставить", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  };

  const meta = typeLabel[exercise.type];

  // Shuffle multiple choice options using exercise.id as seed (deterministic)
  const shuffledOptions = useMemo(() => {
    if (!exercise.options) return [];
    return shuffleWithSeed(exercise.options, exercise.id * 2654435761);
  }, [exercise.options, exercise.id]);

  return (
    <Card className="hover:shadow-sm transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2 min-w-0">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-muted text-xs font-bold shrink-0">
              {index}
            </span>
            <span className="truncate">{exercise.question}</span>
          </CardTitle>
          <div className="flex items-center gap-1.5 shrink-0">
            {exercise.hint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setHintOpen(!hintOpen)}
                className={cn(
                  "h-7 px-2 gap-1.5 text-xs rounded-full transition-colors",
                  hintOpen
                    ? "bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400"
                    : "text-muted-foreground hover:text-amber-600 hover:bg-amber-50 dark:hover:text-amber-400 dark:hover:bg-amber-900/20"
                )}
              >
                <Lightbulb className={cn("h-3.5 w-3.5", hintOpen && "fill-current")} />
                <span className="hidden sm:inline">{hintOpen ? "Скрыть" : "Подсказка"}</span>
              </Button>
            )}
            <Badge variant="secondary" className={cn("text-xs", meta.color)}>
              {meta.label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Hint */}
        {hintOpen && exercise.hint && (
          <div className="bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800/40 rounded-lg p-3 flex gap-2.5">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 fill-current" />
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              {exercise.hint}
            </p>
          </div>
        )}

        {exercise.type === "multiple_choice" && exercise.options && (
          <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
            {shuffledOptions.map((option, i) => (
              <Label
                key={i}
                htmlFor={`${exercise.id}-opt-${i}`}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                  value === option
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30 hover:bg-muted/50"
                )}
              >
                <RadioGroupItem value={option} id={`${exercise.id}-opt-${i}`} />
                <span className="text-sm font-medium">{option}</span>
              </Label>
            ))}
          </RadioGroup>
        )}

        {exercise.type === "fill_blank" && (
          <div className="flex items-center gap-2">
            <Label htmlFor={`fill-${exercise.id}`} className="text-sm text-muted-foreground shrink-0">
              Ответ:
            </Label>
            <Input
              id={`fill-${exercise.id}`}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Введите ответ..."
              className="max-w-[300px]"
              autoComplete="off"
            />
          </div>
        )}

        {exercise.type === "translate_ru_en" && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground italic">{exercise.question}</p>
            <div className="flex items-center gap-2">
              <Label htmlFor={`trans-${exercise.id}`} className="text-sm text-muted-foreground shrink-0">
                Перевод:
              </Label>
              <Input
                id={`trans-${exercise.id}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your translation..."
                className="max-w-[400px]"
                autoComplete="off"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
