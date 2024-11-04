import { NextResponse } from "next/server";
import { programmingLanguages } from "@/types/problem";

export async function GET() {
  return NextResponse.json(programmingLanguages);
}
