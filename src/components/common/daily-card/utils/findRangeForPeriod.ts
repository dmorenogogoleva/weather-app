import { TDailyData } from "types";
import { TPeriodRange } from "components/common/daily-card/types/PeriodRange";

export function findRangeForPeriod(
  items: TDailyData[],
  period: number
): TPeriodRange {
  if (period > items.length) {
    throw Error("period must not exceed the number of days");
  }

  const data = items.slice(0, period);

  const min = Math.min(...data.map((el) => el.tempMin));
  const max = Math.max(...data.map((el) => el.tempMax));

  return { min, max };
}
