import { TIntervalData } from "./IntervalData";

export type TDailyData = {
  tempMin: number;
  tempMax: number;
} & TIntervalData;
