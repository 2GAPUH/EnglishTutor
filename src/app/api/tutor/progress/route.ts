import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { TENSE_ORDER, ALL_TENSES, type TenseId } from "@/lib/tutor-data";

export async function GET() {
  try {
    const allProgress = await db.tenseProgress.findMany();

    const progressMap: Record<string, {
      tense: string;
      theoryDone: boolean;
      completed: boolean;
    }> = {};

    for (const p of allProgress) {
      progressMap[p.tense] = {
        tense: p.tense,
        theoryDone: p.theoryDone,
        completed: p.completed,
      };
    }

    // Determine current tense
    let currentTense: TenseId = TENSE_ORDER[0];
    let currentView: string = "theory";
    for (const tenseId of TENSE_ORDER) {
      const prog = progressMap[tenseId];
      const tenseData = ALL_TENSES[tenseId];
      if (!tenseData || !tenseData.exercises.length) {
        currentTense = tenseId;
        currentView = "blocked";
        break;
      }
      if (!prog || !prog.theoryDone) {
        currentTense = tenseId;
        currentView = "theory";
        break;
      }
      if (!prog.completed) {
        currentTense = tenseId;
        currentView = "setup";
        break;
      }
    }

    return NextResponse.json({ currentTense, currentView, progressMap });
  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json({ error: "Failed to fetch progress" }, { status: 500 });
  }
}
