import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// POST /api/tutor/reset — reset all progress
export async function POST() {
  try {
    await db.userAnswer.deleteMany();
    await db.tenseProgress.deleteMany();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error resetting progress:", error);
    return NextResponse.json({ error: "Failed to reset progress" }, { status: 500 });
  }
}
