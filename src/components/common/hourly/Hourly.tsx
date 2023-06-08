import React from "react";
import { Icon } from "components/ui/icon";
import { TIntervalData } from "types";
import { DEFAULT_VALUE } from "utils";

interface ForecastProps {
  items?: TIntervalData[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-title">HOURLY FORECAST</h2>
      <div className="scroller">
        <div className="forecast-list">
          {items?.slice(0, 4).map(({ id, temp, time, iconName }) => (
            <div key={id} className="forecast-item">
              <span>{time}</span>
              <span>{iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}</span>
              <span>{temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
