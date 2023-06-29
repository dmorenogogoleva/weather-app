import { TCurrentData, TDailyData, TIntervalData } from "types";

export function getFromStore(): {
  storedCurrent: TCurrentData | undefined;
  storedDaily: TDailyData[] | undefined;
  storedHourly: TIntervalData[] | undefined;
} | null {
  const storedCurrent = localStorage.getItem("current");
  const storedDaily = localStorage.getItem("daily");
  const storedHourly = localStorage.getItem("hourly");
  const timestamp = localStorage.getItem("timestamp");

  const isStoredDataActual =
    new Date(Number(timestamp)).getDate() === new Date().getDate() &&
    new Date(Number(timestamp)).getHours() === new Date().getHours();

  if ([storedCurrent, storedDaily, storedHourly].some((v) => !v)) {
    return null;
  }
  if (!isStoredDataActual) return null;

  return {
    storedCurrent: JSON.parse(storedCurrent!),
    storedDaily: JSON.parse(storedDaily!),
    storedHourly: JSON.parse(storedHourly!),
  };
}

export function setToStore({
  current,
  daily,
  hourly,
}: {
  current: TCurrentData;
  daily: TDailyData[];
  hourly: TIntervalData[];
}): void {
  localStorage.setItem("current", JSON.stringify(current));
  localStorage.setItem("daily", JSON.stringify(daily));
  localStorage.setItem("hourly", JSON.stringify(hourly));
  localStorage.setItem("timestamp", JSON.stringify(Date.now()));
}
