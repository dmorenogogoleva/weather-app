import React from "react";

import { Icon } from "components/ui/icon";
import { TDailyData } from "types";
import { DEFAULT_VALUE } from "utils";

interface DailyProps {
  items?: TDailyData[];
}

export const DailyCard: React.FC<DailyProps> = ({ items }) => {
  return (
    <div className="daily">
      <h2 className="daily-title">10-DAY FORECAST</h2>
      <div className="daily-list">
        {items?.slice(0, 9).map(({ id, time, tempMin, tempMax, iconName }) => (
          <div key={id} className="daily-row">
            <div className="daily-time">{time}</div>
            <div className="daily-conditions">
              {iconName ? <Icon name={iconName} /> : DEFAULT_VALUE}
            </div>
            <div className="daily-range">
              <span className="daily-min">{tempMin}°</span>
              <span className="range">
                <span className="range-meter" />
                <span className="range-current" />
              </span>
              <span className="daily-max">{tempMax}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
