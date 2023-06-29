import { DEFAULT_VALUE, DEGREE_SYMBOL } from "./constants";

export function formatTemperature(temp?: number): string {
  if (typeof temp !== "number") return DEFAULT_VALUE;

  return `${temp}${DEGREE_SYMBOL}`;
}
