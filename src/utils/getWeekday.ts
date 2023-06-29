const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export type Weekday = (typeof weekdays)[number];

export function getWeekday(date: string): Weekday {
  return weekdays[new Date(date).getDay()];
}
