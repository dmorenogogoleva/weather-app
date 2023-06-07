import { TIntervalData } from "./IntervalData";

export type TDailyData = {
  tempMin: string;
  tempMax: string;
} & TIntervalData;
