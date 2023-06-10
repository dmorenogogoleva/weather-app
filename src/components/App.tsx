import React, { FC } from "react";
import "../style.css";
import { Header } from "./common/header";
import { HourlyCard } from "./common/hourly-card";
import { DailyCard } from "./common/daily-card";
import { useWeatherData } from "hooks/useWeatherData";
import { useDynamicBackgorund } from "hooks/useDynamicBackgorund";
import { Loader } from "./ui/loader/Loader";

const App: FC = () => {
  useDynamicBackgorund();
  const { currentWeather, hourlyForecast, dailyForecast, isLoading } =
    useWeatherData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <Header {...currentWeather} />
      <HourlyCard items={hourlyForecast} />
      <DailyCard items={dailyForecast} />
    </main>
  );
};

export default App;
