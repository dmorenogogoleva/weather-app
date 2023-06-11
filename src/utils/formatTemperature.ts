import { DEGREE_SYMBOL } from "./constants";

export function formatTemperature(temp?: number): string {
  return `${temp}${DEGREE_SYMBOL}`;
}
