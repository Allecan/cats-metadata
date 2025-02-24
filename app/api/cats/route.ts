import { NextResponse } from "next/server";

import { CATS } from "@/utils/constants/cats";

export async function GET() {
  return NextResponse.json(CATS);
}
