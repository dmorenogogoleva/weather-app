import { DEGREE_SYMBOL } from "./constants";

export function formatTemperature(temp: number, withDegree = true): string {
  const roundedTemp = `${Math.round(temp)}`;
  return withDegree ? `${roundedTemp}${DEGREE_SYMBOL}` : roundedTemp;
}
