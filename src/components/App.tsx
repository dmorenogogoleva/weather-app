import React, { FC } from "react";
import "../style.css";
import { Header } from "./common/header";
import { HourlyCard } from "./common/hourly-card";
import { DailyCard } from "./common/daily-card";
import { useWeatherData } from "hooks/useWeatherData";
import { useDynamicBackgorund } from "hooks/useDynamicBackgorund";
import { PageLayout } from "./ui/page-layout";

import styles from "./App.module.css";

const App: FC = () => {
  useDynamicBackgorund();
  const { currentWeather, hourlyForecast, dailyForecast, isLoading } =
    useWeatherData();

  return (
    <PageLayout isLoading={isLoading}>
      <Header {...currentWeather} />
      <main className={styles.main}>
        <HourlyCard items={hourlyForecast} />
        <DailyCard items={dailyForecast} currentTemp={currentWeather?.temp} />
      </main>
    </PageLayout>
  );
};

export default App;
