import { z } from "zod";

import { COUNTRY_CODES } from "./constants/country-codes";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  COUNTRY_CODE: z.enum(COUNTRY_CODES, {
    required_error: "COUNTRY_CODE env is required and must be GT, MX or ES",
  }),
  SECRET_KEY: z.string({
    required_error: "SECRET_KEY env is required",
  }),
  SITE_NAME: z.string({
    required_error: "SITE_NAME env is required",
  }),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("Environment variables validation failed:", error.format());
  process.exit(1);
}

export const { NEXT_PUBLIC_SITE_URL, COUNTRY_CODE, SECRET_KEY, SITE_NAME } =
  data;
