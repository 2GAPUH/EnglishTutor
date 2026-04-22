"use client";

import React, { useMemo, useState } from "react";
import { IRREGULAR_VERBS, type IrregularVerb } from "@/lib/irregular-verbs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface IrregularVerbsTableProps {
  className?: string;
}

export function IrregularVerbsTable({ className }: IrregularVerbsTableProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return IRREGULAR_VERBS;
    const q = search.toLowerCase().trim();
    return IRREGULAR_VERBS.filter(
      (v) =>
        v.v1.toLowerCase().includes(q) ||
        v.v2.toLowerCase().includes(q) ||
        v.v3.toLowerCase().includes(q) ||
        v.ru.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Поиск по форме или переводу..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Stats */}
      <p className="text-xs text-muted-foreground">
        {filtered.length === IRREGULAR_VERBS.length
          ? `Всего ${IRREGULAR_VERBS.length} глаголов`
          : `Найдено ${filtered.length} из ${IRREGULAR_VERBS.length}`}
      </p>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/80 border-b">
                <th className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">V1 (Infinitive)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">V2 (Past Simple)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">V3 (Past Participle)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">Перевод</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((verb, idx) => (
                <VerbRow key={verb.v1} verb={verb} idx={idx} />
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                    Ничего не найдено
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function VerbRow({ verb, idx }: { verb: IrregularVerb; idx: number }) {
  return (
    <tr
      className={cn(
        "border-b last:border-b-0 hover:bg-muted/30 transition-colors",
        idx % 2 === 0 && "bg-muted/10"
      )}
    >
      <td className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">{verb.v1}</td>
      <td className="px-4 py-2.5 text-foreground/90 whitespace-nowrap">{verb.v2}</td>
      <td className="px-4 py-2.5 text-foreground/90 whitespace-nowrap">{verb.v3}</td>
      <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap">{verb.ru}</td>
    </tr>
  );
}
