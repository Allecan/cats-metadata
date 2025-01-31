import { NextResponse } from "next/server";

import { CATS } from "@/utils/constants/cats";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const cat = CATS.find((cat) => cat.slug === slug);

  if (!cat) {
    return NextResponse.json({ error: "Cat not found" }, { status: 404 });
  }

  return NextResponse.json(cat);
}
