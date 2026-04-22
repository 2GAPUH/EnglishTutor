"use client";

import { getTenseData, type TenseId } from "@/lib/tutor-data";
import { useTutorStore } from "@/store/tutor-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, CheckCircle2, BookMarked } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import type { Components } from "react-markdown";
import { IrregularVerbsTable } from "@/components/tutor/irregular-verbs-table";

const markdownComponents: Components = {
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-lg border">
      <table className="w-full text-sm border-collapse bg-card">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/80">{children}</thead>,
  th: ({ children }) => (
    <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b whitespace-nowrap">{children}</th>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">{children}</tr>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2.5 text-foreground/90 whitespace-nowrap">{children}</td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-3 border-l-4 border-primary/40 bg-primary/5 rounded-r-lg py-3 px-4 text-sm italic">{children}</blockquote>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>;
    }
    return <code className={className}>{children}</code>;
  },
  p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="my-2 list-disc pl-6 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="my-2 list-decimal pl-6 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="text-foreground/90">{children}</li>,
  h3: ({ children }) => <h3 className="text-base font-semibold mt-4 mb-2 text-foreground">{children}</h3>,
  h4: ({ children }) => <h4 className="text-sm font-semibold mt-3 mb-1.5 text-foreground">{children}</h4>,
};

interface TheoryPanelProps {
  className?: string;
}

/** Tenses that use V2 or V3 verb forms and need a link to irregular verbs */
const TENSES_WITH_IRREGULAR: TenseId[] = [
  "past-simple",
  "present-perfect",
  "present-perfect-continuous",
  "past-perfect",
  "past-perfect-continuous",
];

export function TheoryPanel({ className }: TheoryPanelProps) {
  const { currentTense, setView, progressMap, goToIrregularVerbs } = useTutorStore();
  const tenseData = getTenseData(currentTense);
  const isDone = progressMap[currentTense]?.theoryDone ?? false;
  const showIrregularButton = TENSES_WITH_IRREGULAR.includes(currentTense);

  const handleMarkDone = async () => {
    await fetch("/api/tutor/theory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tense: currentTense }),
    });
    setView("setup");
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{tenseData.nameRu}</h1>
          <p className="text-sm text-muted-foreground">{tenseData.nameEn}</p>
        </div>
        {isDone && (
          <Badge variant="secondary" className="ml-auto flex items-center gap-1 text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Прочитано
          </Badge>
        )}
      </div>

      <div className="space-y-4">
        {tenseData.theory.map((section, idx) => (
          <Card key={idx} className="border-l-4 border-l-primary/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {idx + 1}
                </span>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/90 space-y-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{section.content}</ReactMarkdown>
              {section.embedVerbs && <IrregularVerbsTable compact />}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Link to irregular verbs for tenses that use V2/V3 */}
      {showIrregularButton && (
        <Card className="border-dashed border-primary/30">
          <CardContent className="py-4 flex items-center gap-3">
            <BookMarked className="h-5 w-5 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Неправильные глаголы</p>
              <p className="text-xs text-muted-foreground">Для этого времени нужно знать формы неправильных глаголов</p>
            </div>
            <Button variant="outline" size="sm" onClick={goToIrregularVerbs} className="gap-2 shrink-0">
              <BookMarked className="h-3.5 w-3.5" />
              Таблица и тест
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end pt-4">
        <Button onClick={handleMarkDone} size="lg" className="gap-2">
          Перейти к практике
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
