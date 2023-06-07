import React from "react";
import { THourly } from "types/Hourly";
import { Icon } from "components/ui/icon";

interface ForecastProps {
  items: THourly[];
}

export const HourlyCard: React.FC<ForecastProps> = ({ items }) => {
  return (
    <div className="forecast">
      <div className="forecast-title">HOURLY FORECAST</div>
      <div className="scroller">
        <div className="forecast-list">
          {items.map(({ datetime, temperature }) => (
            <div key={datetime} className="forecast-item">
              <span>{datetime}</span>
              <span>
                <Icon name="thunder" />
              </span>
              <span>{temperature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
