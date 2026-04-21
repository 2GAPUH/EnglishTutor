"use client";

import { useTutorStore } from "@/store/tutor-store";
import { getTenseData } from "@/lib/tutor-data";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface BlockedPanelProps {
  className?: string;
}

export function BlockedPanel({ className }: BlockedPanelProps) {
  const { currentTense } = useTutorStore();
  const tenseData = getTenseData(currentTense);

  return (
    <Card className={className}>
      <CardContent className="py-16 text-center space-y-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted mx-auto">
          <Lock className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{tenseData.nameRu}</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Этот блок будет доступен после завершения предыдущих тем. Двигайтесь шаг за шагом —
            спешка не нужна!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
