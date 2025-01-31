"use server";

import { CATS } from "@/utils/constants/cats";
import { API_URL } from "@/utils/env";

export async function findOneCat(
  slug: string
): Promise<
  | { status: "success"; data: (typeof CATS)[number] }
  | { status: "error"; error: string }
> {
  try {
    const response = await fetch(`${API_URL}/cats/${slug}`, {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Cat not found");
    }

    const cat = (await response.json()) as (typeof CATS)[number];

    return {
      status: "success",
      data: cat,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: "error",
        error: error.message,
      };
    }

    return {
      status: "error",
      error: "Cat not found",
    };
  }
}
