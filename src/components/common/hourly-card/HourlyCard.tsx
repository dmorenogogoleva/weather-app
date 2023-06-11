import React, { useMemo } from "react";
import { Icon } from "components/ui/icon";
import { TIntervalData } from "types";
import {
  CURRENT_TIME,
  DEFAULT_VALUE,
  formatTemperature,
  formatTime,
} from "utils";
import { Card } from "components/ui/card";

import styles from "./HourlyCard.module.css";

interface ForecastProps {
  items?: TIntervalData[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  const itemsUntilNextDay = useMemo(
    () =>
      items?.filter(
        (it) =>
          new Date(it.time).getDate() === new Date().getDate() ||
          it.time === CURRENT_TIME
      ),
    [items]
  );

  return (
    <Card title="Hourly forecast" kind="horizontal" className={styles.card}>
      {itemsUntilNextDay?.map(({ id, temp, time, iconName }) => (
        <div key={id} className={styles.item}>
          <span className={styles.time}>
            {formatTime(time) || DEFAULT_VALUE}
          </span>
          {iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}
          <span className={styles.temp}>{formatTemperature(temp)}</span>
        </div>
      ))}
    </Card>
  );
};
