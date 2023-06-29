import { CURRENT_TIME } from "./constants";

export function formatTime(datetime?: string): string {
  if (!datetime) return "";

  if (datetime === CURRENT_TIME) return datetime;

  return new Date(datetime).getHours().toString().padStart(2, "0");
}
