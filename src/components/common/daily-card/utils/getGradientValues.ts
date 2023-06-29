import { TGradientValues } from "../types/GradientBoundaries";
import { TPeriodRange } from "../types/PeriodRange";

interface GetGradientValuesParams {
  range: TPeriodRange;
  todayMin: number;
  todayMax: number;
  currentTemp?: number;
}

export function getGradientValues({
  range: { min, max },
  todayMin,
  todayMax,
  currentTemp,
}: GetGradientValuesParams): TGradientValues {
  if (min > max || todayMin > todayMax) {
    throw new Error("min temperature must be less than max");
  }

  const percent = (max - min) / 100;
  const leftStart = todayMin - min;
  const rightStart = max - todayMax;

  const left = leftStart / percent;
  const right = rightStart / percent;

  if (typeof currentTemp !== "number") {
    return { left, right };
  }

  const currentStart = currentTemp - min;
  const current = currentStart / percent;

  return { left, right, current };
}
