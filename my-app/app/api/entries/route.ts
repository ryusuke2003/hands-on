import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { entrySchema } from "@/lib/zod";

export async function GET() {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(entries);
}

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = entrySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.message }, { status: 400 });
  }
  const entry = await prisma.entry.create({ data: parsed.data });
  return NextResponse.json({ id: entry.id }, { status: 201 });
}
