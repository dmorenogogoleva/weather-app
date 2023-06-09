import { DEGREE_SYMBOL } from "./constants";

export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}${DEGREE_SYMBOL}`;
}
