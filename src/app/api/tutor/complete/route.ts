import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST /api/tutor/complete — mark a tense as completed (studied)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tense } = body;

    if (!tense) {
      return NextResponse.json({ error: "Missing tense" }, { status: 400 });
    }

    await db.tenseProgress.upsert({
      where: { tense },
      update: {
        theoryDone: true,
        completed: true,
      },
      create: {
        tense,
        theoryDone: true,
        completed: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking tense completed:", error);
    return NextResponse.json({ error: "Failed to mark tense completed" }, { status: 500 });
  }
}
