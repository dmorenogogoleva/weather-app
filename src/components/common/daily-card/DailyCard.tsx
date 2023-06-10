import React from "react";

import { Icon } from "components/ui/icon";
import { TDailyData } from "types";
import { DEFAULT_VALUE } from "utils";
import { Card } from "components/ui/card";

import styles from "./DailyCard.module.css";

interface DailyProps {
  items?: TDailyData[];
}

export const DailyCard: React.FC<DailyProps> = ({ items }) => {
  return (
    <Card title="10-day forecast">
      {items
        ?.slice(0, 9)
        .map(({ id, time, tempMin, tempMax, humidity, iconName }) => (
          <div key={id} className={styles.row}>
            <div className={styles.time}>{time}</div>
            <div className={styles.conditions}>
              {iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}
              <span className={styles.probability}>{humidity}%</span>
            </div>
            <div className={styles.temp}>
              <span className={styles.min}>{tempMin}</span>
              <span className={styles.range}>
                <span className={styles["range-meter"]} />
                <span className={styles["range-current"]} />
              </span>
              <span className={styles.max}>{tempMax}</span>
            </div>
          </div>
        ))}
    </Card>
  );
};
