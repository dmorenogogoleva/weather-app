import React from "react";
import { Icon } from "components/ui/icon";
import { TIntervalData } from "types";
import { DEFAULT_VALUE } from "utils";
import { CardSmall } from "components/ui/card-small";

interface ForecastProps {
  items?: TIntervalData[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  return (
    <CardSmall title="HOURLY FORECAST">
      {items?.map(({ id, temp, time, iconName }) => (
        <div key={id} className="forecast-item">
          <span>{time}</span>
          <span>{iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}</span>
          <span>{temp}</span>
        </div>
      ))}
    </CardSmall>
  );
};
