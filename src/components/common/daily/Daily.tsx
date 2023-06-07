import React from "react";
import { Rain } from "../../ui/icon/svg/Rain";
import { TDaily } from "types/Daily";

import { Icon } from "components/ui/icon";

interface DailyProps {
  items: TDaily[];
}

export const DailyCard: React.FC<DailyProps> = ({ items }) => {
  return (
    <div className="daily">
      <div className="daily-title">10-DAY FORECAST</div>
      <div className="daily-list">
        {items.map(
          ({
            datetime,
            temp,
            range: { min, max },
            periodRange: { min: lowest, max: highest },
          }) => (
            <div key={datetime} className="daily-row">
              <div className="daily-time">{datetime}</div>

              <div className="daily-conditions">
                <Icon name="rain" />
                <span className="probability">60%</span>
              </div>

              <div className="daily-range">
                <span className="daily-min">{min}°</span>
                <span className="range">
                  <span className="range-meter" />
                  <span className="range-current" />
                </span>
                <span className="daily-max">{max}°</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
