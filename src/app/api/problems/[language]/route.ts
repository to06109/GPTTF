import { NextResponse } from "next/server";
import { programmingLanguages } from "@/types/problem";

export async function GET(
  request: Request,
  { params }: { params: { language: string } }
) {
  const language = programmingLanguages.find(
    (lang) => lang.id === params.language
  );

  if (!language) {
    return NextResponse.json(
      { error: "언어를 찾을 수 없습니다" },
      { status: 404 }
    );
  }

  return NextResponse.json(language);
}
