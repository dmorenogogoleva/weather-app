import React, { useEffect, useState } from "react";

import { TDailyData } from "types";
import { Card } from "components/ui/card";
import { findRangeForPeriod } from "./utils/findRangeForPeriod";
import { DailyRow } from "./daily-row";
import { TPeriodRange } from "components/common/daily-card/types/PeriodRange";

interface DailyProps {
  items?: TDailyData[];
  currentTemp?: number;
}

export const DailyCard: React.FC<DailyProps> = ({ items, currentTemp }) => {
  const [range, setRange] = useState<TPeriodRange>();

  useEffect(() => {
    if (!items) return;

    const periodRange = findRangeForPeriod(items, 10);
    setRange(periodRange);
  }, [items]);

  return (
    <Card title="10-day forecast">
      {items?.slice(0, 10).map((item) => (
        <DailyRow
          key={item.id}
          item={item}
          range={range}
          currentTemp={currentTemp}
        />
      ))}
    </Card>
  );
};
