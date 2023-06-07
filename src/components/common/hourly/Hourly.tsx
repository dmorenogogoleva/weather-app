import React from "react";
import { Icon } from "components/ui/icon";
import { TIntervalData } from "types";

interface ForecastProps {
  items?: TIntervalData[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-title">HOURLY FORECAST</h2>
      <div className="scroller">
        <div className="forecast-list">
          {items?.slice(0, 4).map(({ id, temp, time }) => (
            <div key={id} className="forecast-item">
              <span>{time}</span>
              <span>
                <Icon name="thunder" />
              </span>
              <span>{temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
