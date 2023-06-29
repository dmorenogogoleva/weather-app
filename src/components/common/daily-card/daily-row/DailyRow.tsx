import React, { CSSProperties, useEffect, useState } from "react";

import { TDailyData } from "types";
import { Icon } from "components/ui/icon";
import { DEFAULT_VALUE, formatTemperature } from "utils";
import { TPeriodRange } from "components/common/daily-card/types/PeriodRange";
import { getGradientValues } from "../utils/getGradientValues";
import { TGradientValues } from "../types/GradientBoundaries";

import styles from "./DailyRow.module.css";

interface GradientProperties extends CSSProperties {
  "--left": string;
  "--right": string;
  "--current": string;
}

interface DailyRowProps {
  item: TDailyData;
  range?: TPeriodRange;
  currentTemp?: number;
}

export const DailyRow: React.FC<DailyRowProps> = ({
  item,
  range,
  currentTemp,
}) => {
  const [values, setGradientValues] = useState<TGradientValues>();
  const { time, iconName, precip, tempMin, tempMax } = item;

  useEffect(() => {
    if (!range) return;

    const gradientValues = getGradientValues({
      range,
      currentTemp,
      todayMin: tempMin,
      todayMax: tempMax,
    });
    setGradientValues(gradientValues);
  }, [currentTemp, range, tempMax, tempMin]);

  return (
    <div className={styles.row}>
      <div className={styles.time}>{time}</div>
      <div className={styles.conditions}>
        {iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}
        {Number(precip) >= 20 ? (
          <span className={styles.probability}>{precip}%</span>
        ) : null}
      </div>
      <div className={styles.temp}>
        <span className={styles.min}>{formatTemperature(tempMin)}</span>
        <span
          style={
            {
              ["--left"]: `${values?.left}%`,
              ["--right"]: `${values?.right}%`,
              ["--current"]: `${values?.current}%`,
            } as GradientProperties
          }
          className={styles.range}
        >
          <span className={styles["range-meter"]} />
          <span className={styles["range-current"]} />
        </span>
        <span className={styles.max}>{formatTemperature(tempMax)}</span>
      </div>
    </div>
  );
};
