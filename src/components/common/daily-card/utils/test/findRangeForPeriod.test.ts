import { TDailyData } from "types";
import { findRangeForPeriod } from "../findRangeForPeriod";

const mockDailyItems = [
  { tempMin: 1, tempMax: 10 },
  { tempMin: 5, tempMax: 10 },
  { tempMin: 6, tempMax: 15 },
  { tempMin: -10, tempMax: 10 },
  { tempMin: -25, tempMax: 30 },
  { tempMin: -40, tempMax: 40 },
] as TDailyData[];

test("findRangeForPeriod works", () => {
  expect(findRangeForPeriod(mockDailyItems, 3)).toStrictEqual({
    min: 1,
    max: 15,
  });

  expect(findRangeForPeriod(mockDailyItems, 5)).toStrictEqual({
    min: -25,
    max: 30,
  });

  expect(findRangeForPeriod(mockDailyItems, 6)).toStrictEqual({
    min: -40,
    max: 40,
  });
});

test("findRangeForPeriod throws error", () => {
  expect(() => findRangeForPeriod(mockDailyItems, 50)).toThrowError();
});
