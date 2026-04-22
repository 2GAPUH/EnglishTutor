"use client";

import React, { useState, useMemo, useCallback } from "react";
import { IRREGULAR_VERBS, type IrregularVerb } from "@/lib/irregular-verbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Trophy,
  BookOpen,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// ============================================================
// Types
// ============================================================

type TestMode = "v2" | "v3" | "mixed";
type TestState = "setup" | "running" | "result";

interface Question {
  verb: IrregularVerb;
  /** Which form to ask for */
  askFor: "v2" | "v3";
  /** The correct answer */
  correct: string;
}

interface Answer {
  questionIndex: number;
  userInput: string;
  isCorrect: boolean;
  correctAnswer: string;
  askedForm: "v2" | "v3";
  verb: IrregularVerb;
}

// ============================================================
// Helpers
// ============================================================

/** Shuffle an array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Normalize a verb form for comparison: lowercase, trim, handle slashes */
function normalizeAnswer(input: string, correct: string): boolean {
  const clean = (s: string) =>
    s.toLowerCase().trim().replace(/\s+/g, " ");

  const inputNorm = clean(input);
  // Correct answer might contain slashes (e.g. "was/were", "born/borne")
  const alternatives = correct.split("/").map((s) => clean(s));

  return alternatives.some((alt) => alt === inputNorm);
}

/** Generate questions based on mode and count */
function generateQuestions(mode: TestMode, count: number): Question[] {
  const pool = shuffle(IRREGULAR_VERBS).slice(0, count);

  return pool.map((verb) => {
    let askFor: "v2" | "v3";
    if (mode === "v2") askFor = "v2";
    else if (mode === "v3") askFor = "v3";
    else askFor = Math.random() < 0.5 ? "v2" : "v3";

    return {
      verb,
      askFor,
      correct: askFor === "v2" ? verb.v2 : verb.v3,
    };
  });
}

// ============================================================
// Component
// ============================================================

interface IrregularVerbsTestProps {
  className?: string;
}

export function IrregularVerbsTest({ className }: IrregularVerbsTestProps) {
  const [testState, setTestState] = useState<TestState>("setup");
  const [testMode, setTestMode] = useState<TestMode>("mixed");
  const [questionCount, setQuestionCount] = useState(20);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Results calculation — always computed, used only when testState === "result"
  const results = useMemo(() => {
    const total = answers.length;
    const correct = answers.filter((a) => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { total, correct, percentage };
  }, [answers]);

  const grade = useMemo(() => {
    if (results.percentage >= 90) return { label: "Отлично!", color: "text-emerald-600" };
    if (results.percentage >= 70) return { label: "Хорошо!", color: "text-blue-600" };
    if (results.percentage >= 50) return { label: "Неплохо", color: "text-amber-600" };
    return { label: "Нужно повторить", color: "text-red-500" };
  }, [results.percentage]);

  const startTest = useCallback(() => {
    const qs = generateQuestions(testMode, questionCount);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers([]);
    setCurrentInput("");
    setShowFeedback(false);
    setTestState("running");
  }, [testMode, questionCount]);

  const handleSubmit = useCallback(() => {
    if (!currentInput.trim()) {
      toast.error("Введите ответ");
      return;
    }

    const question = questions[currentIndex];
    const correct = normalizeAnswer(currentInput, question.correct);

    const answer: Answer = {
      questionIndex: currentIndex,
      userInput: currentInput.trim(),
      isCorrect: correct,
      correctAnswer: question.correct,
      askedForm: question.askFor,
      verb: question.verb,
    };

    setAnswers((prev) => [...prev, answer]);
    setIsCorrect(correct);
    setShowFeedback(true);
  }, [currentInput, currentIndex, questions]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setTestState("result");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentInput("");
      setShowFeedback(false);
    }
  }, [currentIndex, questions.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (showFeedback) {
          handleNext();
        } else {
          handleSubmit();
        }
      }
    },
    [showFeedback, handleNext, handleSubmit]
  );

  const resetTest = useCallback(() => {
    setTestState("setup");
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setCurrentInput("");
    setShowFeedback(false);
  }, []);

  // ============================================================
  // Setup screen
  // ============================================================
  if (testState === "setup") {
    return (
      <div className={cn("space-y-6", className)}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" />
              Настройка теста
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mode selection */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Что проверяем?</p>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { mode: "v2" as TestMode, label: "V2 (Past Simple)", desc: "2-я форма" },
                  { mode: "v3" as TestMode, label: "V3 (Past Participle)", desc: "3-я форма" },
                  { mode: "mixed" as TestMode, label: "Смешанный", desc: "V2 + V3" },
                ]).map((opt) => (
                  <button
                    key={opt.mode}
                    onClick={() => setTestMode(opt.mode)}
                    className={cn(
                      "flex flex-col items-center gap-1 p-3 rounded-lg border-2 transition-colors text-center",
                      testMode === opt.mode
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-muted/30"
                    )}
                  >
                    <span className="text-sm font-medium">{opt.label}</span>
                    <span className="text-xs text-muted-foreground">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question count */}
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Количество вопросов: <span className="text-primary">{questionCount}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {[10, 15, 20, 30, 50].map((n) => (
                  <Button
                    key={n}
                    variant={questionCount === n ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuestionCount(n)}
                  >
                    {n}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Всего в базе {IRREGULAR_VERBS.length} глаголов
              </p>
            </div>

            {/* Start button */}
            <Button onClick={startTest} size="lg" className="w-full gap-2">
              <Play className="h-4 w-4" />
              Начать тест
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ============================================================
  // Running test
  // ============================================================
  if (testState === "running") {
    const question = questions[currentIndex];
    const progressPercent = ((currentIndex) / questions.length) * 100;

    return (
      <div className={cn("space-y-4", className)}>
        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Вопрос {currentIndex + 1} из {questions.length}</span>
            <span>{answers.filter((a) => a.isCorrect).length} правильно</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Question card */}
        <Card className="border-l-4 border-l-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {question.askFor === "v2" ? "Past Simple (V2)" : "Past Participle (V3)"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Verb display */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">V1</p>
                <p className="text-2xl font-bold text-foreground">{question.verb.v1}</p>
              </div>
              <div className="text-2xl text-muted-foreground">→</div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">
                  {question.askFor === "v2" ? "V2" : "V3"}
                </p>
                {showFeedback ? (
                  <p
                    className={cn(
                      "text-2xl font-bold",
                      isCorrect ? "text-emerald-600" : "text-red-500"
                    )}
                  >
                    {question.correct}
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-muted-foreground">?</p>
                )}
              </div>
              <div className="text-xs text-muted-foreground">({question.verb.ru})</div>
            </div>

            {/* Input */}
            {!showFeedback && (
              <div className="flex gap-2">
                <Input
                  placeholder={`Введите ${question.askFor === "v2" ? "V2 (Past Simple)" : "V3 (Past Participle)"}...`}
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="text-lg"
                  autoFocus
                />
                <Button onClick={handleSubmit} size="lg" className="gap-2 shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                  Проверить
                </Button>
              </div>
            )}

            {/* Feedback */}
            {showFeedback && (
              <div
                className={cn(
                  "p-4 rounded-lg flex items-start gap-3",
                  isCorrect
                    ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800"
                    : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                )}
              >
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={cn("font-medium", isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400")}>
                    {isCorrect ? "Правильно!" : "Неправильно"}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      Ваш ответ: <strong>{answers[answers.length - 1]?.userInput}</strong>
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">
                    {question.verb.v1} → <strong>{question.verb.v2}</strong> → <strong>{question.verb.v3}</strong> ({question.verb.ru})
                  </p>
                </div>
              </div>
            )}

            {/* Next button */}
            {showFeedback && (
              <div className="flex justify-end">
                <Button onClick={handleNext} size="lg" className="gap-2">
                  {currentIndex + 1 >= questions.length ? "Результаты" : "Следующий"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ============================================================
  // Results screen
  // ============================================================
  return (
    <div className={cn("space-y-4", className)}>
      {/* Summary card */}
      <Card className="border-l-4 border-l-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="h-5 w-5 text-amber-500" />
            Результаты теста
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center py-4">
            <p className="text-4xl font-bold">{results.percentage}%</p>
            <p className={cn("text-lg font-medium mt-1", grade.color)}>{grade.label}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {results.correct} из {results.total} правильных ответов
            </p>
          </div>

          <Progress value={results.percentage} className="h-3" />
        </CardContent>
      </Card>

      {/* Wrong answers */}
      {answers.some((a) => !a.isCorrect) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              Ошибки ({answers.filter((a) => !a.isCorrect).length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-72 overflow-y-auto space-y-2">
              {answers
                .filter((a) => !a.isCorrect)
                .map((answer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded-md bg-red-50 dark:bg-red-900/10 text-sm"
                  >
                    <span className="font-medium text-foreground">{answer.verb.v1}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-red-500 line-through">{answer.userInput}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-medium text-emerald-600">
                      {answer.askedForm === "v2" ? answer.verb.v2 : answer.verb.v3}
                    </span>
                    <Badge variant="secondary" className="text-[10px] ml-auto">
                      {answer.verb.ru}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All answers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            Все ответы
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-72 overflow-y-auto space-y-1">
            {answers.map((answer, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-md text-sm",
                  answer.isCorrect
                    ? "bg-emerald-50 dark:bg-emerald-900/10"
                    : "bg-red-50 dark:bg-red-900/10"
                )}
              >
                {answer.isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                )}
                <span className="font-medium text-foreground min-w-[80px]">{answer.verb.v1}</span>
                <span className="text-muted-foreground">→</span>
                <span className={cn(answer.isCorrect ? "text-emerald-600" : "text-red-500 line-through")}>
                  {answer.userInput}
                </span>
                {!answer.isCorrect && (
                  <>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-medium text-emerald-600">
                      {answer.askedForm === "v2" ? answer.verb.v2 : answer.verb.v3}
                    </span>
                  </>
                )}
                <Badge variant="secondary" className="text-[10px] ml-auto">
                  {answer.askedForm === "v2" ? "V2" : "V3"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action buttons */}
      <div className="flex gap-3">
        <Button onClick={startTest} className="flex-1 gap-2">
          <RotateCcw className="h-4 w-4" />
          Пройти ещё раз
        </Button>
        <Button onClick={resetTest} variant="outline" className="flex-1 gap-2">
          Настроить заново
        </Button>
      </div>
    </div>
  );
}
