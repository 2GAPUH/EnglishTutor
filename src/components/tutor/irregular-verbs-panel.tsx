"use client";

import React, { useState } from "react";
import { IrregularVerbsTable } from "@/components/tutor/irregular-verbs-table";
import { IrregularVerbsTest } from "@/components/tutor/irregular-verbs-test";
import { Button } from "@/components/ui/button";
import { BookMarked, Target, ArrowLeft } from "lucide-react";
import { useTutorStore } from "@/store/tutor-store";
import { cn } from "@/lib/utils";

type IrregularVerbsTab = "table" | "test";

export function IrregularVerbsPanel({ className }: { className?: string }) {
  const [tab, setTab] = useState<IrregularVerbsTab>("table");
  const { goToTheory } = useTutorStore();

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
          <BookMarked className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Неправильные глаголы</h1>
          <p className="text-sm text-muted-foreground">Irregular Verbs — уровень B1</p>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2">
        <Button
          variant={tab === "table" ? "default" : "outline"}
          size="sm"
          onClick={() => setTab("table")}
          className="gap-2"
        >
          <BookMarked className="h-4 w-4" />
          Таблица
        </Button>
        <Button
          variant={tab === "test" ? "default" : "outline"}
          size="sm"
          onClick={() => setTab("test")}
          className="gap-2"
        >
          <Target className="h-4 w-4" />
          Тест
        </Button>
      </div>

      {/* Content */}
      {tab === "table" ? <IrregularVerbsTable /> : <IrregularVerbsTest />}

      {/* Back button */}
      <div className="flex justify-start pt-2">
        <Button variant="ghost" size="sm" onClick={goToTheory} className="gap-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          Вернуться к теории
        </Button>
      </div>
    </div>
  );
}
