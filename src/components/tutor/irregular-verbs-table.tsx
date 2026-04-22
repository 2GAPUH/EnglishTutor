"use client";

import React, { useMemo, useState } from "react";
import { IRREGULAR_VERBS, type IrregularVerb } from "@/lib/irregular-verbs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface IrregularVerbsTableProps {
  className?: string;
  /** Compact mode: small font, max height with scroll, for embedding inside theory */
  compact?: boolean;
}

export function IrregularVerbsTable({ className, compact }: IrregularVerbsTableProps) {
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
    <div className={cn("space-y-2", compact && "space-y-1.5", className)}>
      {/* Search */}
      <div className="relative">
        <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", compact ? "h-3 w-3" : "h-4 w-4")} />
        <Input
          placeholder="Поиск по форме или переводу..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cn(compact && "pl-8 h-8 text-xs")}
        />
      </div>

      {/* Stats */}
      <p className="text-xs text-muted-foreground">
        {filtered.length === IRREGULAR_VERBS.length
          ? `Всего ${IRREGULAR_VERBS.length} глаголов`
          : `Найдено ${filtered.length} из ${IRREGULAR_VERBS.length}`}
      </p>

      {/* Table */}
      <Card className={compact && "shadow-none"}>
        <div
          className={cn(
            "overflow-x-auto rounded-lg",
            compact && "max-h-72 overflow-y-auto"
          )}
          style={compact ? { scrollbarWidth: "thin" } : undefined}
        >
          <table className={cn("w-full border-collapse", compact ? "text-xs" : "text-sm")}>
            <thead className="sticky top-0 z-10">
              <tr className="bg-muted/80 border-b">
                <th className={cn("text-left font-semibold text-foreground whitespace-nowrap", compact ? "px-2 py-1.5" : "px-4 py-2.5")}>V1</th>
                <th className={cn("text-left font-semibold text-foreground whitespace-nowrap", compact ? "px-2 py-1.5" : "px-4 py-2.5")}>V2</th>
                <th className={cn("text-left font-semibold text-foreground whitespace-nowrap", compact ? "px-2 py-1.5" : "px-4 py-2.5")}>V3</th>
                <th className={cn("text-left font-semibold text-foreground whitespace-nowrap", compact ? "px-2 py-1.5" : "px-4 py-2.5")}>Перевод</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((verb, idx) => (
                <VerbRow key={verb.v1} verb={verb} idx={idx} compact={compact} />
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className={cn("text-center text-muted-foreground", compact ? "px-2 py-4" : "px-4 py-8")}>
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

function VerbRow({ verb, idx, compact }: { verb: IrregularVerb; idx: number; compact?: boolean }) {
  return (
    <tr
      className={cn(
        "border-b last:border-b-0 hover:bg-muted/30 transition-colors",
        idx % 2 === 0 && "bg-muted/10"
      )}
    >
      <td className={cn("font-medium text-foreground whitespace-nowrap", compact ? "px-2 py-1" : "px-4 py-2.5")}>{verb.v1}</td>
      <td className={cn("text-foreground/90 whitespace-nowrap", compact ? "px-2 py-1" : "px-4 py-2.5")}>{verb.v2}</td>
      <td className={cn("text-foreground/90 whitespace-nowrap", compact ? "px-2 py-1" : "px-4 py-2.5")}>{verb.v3}</td>
      <td className={cn("text-muted-foreground whitespace-nowrap", compact ? "px-2 py-1" : "px-4 py-2.5")}>{verb.ru}</td>
    </tr>
  );
}
