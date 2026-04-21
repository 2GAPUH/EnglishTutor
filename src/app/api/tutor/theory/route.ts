import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/tutor/theory?tense=present-simple — mark theory as done
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tense } = body;

    if (!tense) {
      return NextResponse.json({ error: "Missing tense" }, { status: 400 });
    }

    await db.tenseProgress.upsert({
      where: { tense },
      update: { theoryDone: true },
      create: { tense, theoryDone: true },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking theory done:", error);
    return NextResponse.json({ error: "Failed to mark theory done" }, { status: 500 });
  }
}
