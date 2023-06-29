import { CURRENT_DAY } from "./constants";
import { Weekday, getWeekday } from "./getWeekday";

export function formatDate(date: string): Weekday | string {
  return new Date(date).getDate() === new Date().getDate()
    ? CURRENT_DAY
    : getWeekday(date);
}
