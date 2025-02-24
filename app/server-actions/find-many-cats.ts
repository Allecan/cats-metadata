"use server";

import { CATS } from "@/utils/constants/cats";
import { API_URL } from "@/utils/env";

export async function findManyCats(): Promise<
  | { status: "success"; data: (typeof CATS)[number][] }
  | { status: "error"; error: string }
> {
  try {
    const response = await fetch(`${API_URL}/cats/`, {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Error fetching cats");
    }

    const data = await response.json();

    const cats = data as (typeof CATS)[number][];
    console.log(data);

    return {
      status: "success",
      data: cats,
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
