import { COUNTRY_CODES } from "./country-codes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const COUNTRIES = ["Guatemala", "Mexico", "Spain"] as const;

export const COUNTRY_CODE_NAME: Record<
  (typeof COUNTRY_CODES)[number],
  (typeof COUNTRIES)[number]
> = {
  GT: "Guatemala",
  MX: "Mexico",
  ES: "Spain",
} as const;
