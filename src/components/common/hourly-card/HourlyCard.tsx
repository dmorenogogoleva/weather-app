import React from "react";
import { Icon } from "components/ui/icon";
import { TIntervalData } from "types";
import { DEFAULT_VALUE } from "utils";
import { Card } from "components/ui/card";

import styles from "./HourlyCard.module.css";

interface ForecastProps {
  items?: TIntervalData[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  return (
    <Card title="Hourly forecast" kind="horizontal" className={styles.card}>
      {items?.map(({ id, temp, time, iconName }) => (
        <div key={id} className={styles.item}>
          <span className={styles.time}>{time || DEFAULT_VALUE}</span>
          {iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}
          <span className={styles.temp}>{temp || DEFAULT_VALUE}</span>
        </div>
      ))}
    </Card>
  );
};
