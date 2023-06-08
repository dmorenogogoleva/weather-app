import React from "react";
import "../style.css";

import { Header } from "./common/header";
import { HourlyCard } from "./common/hourly";
import { DailyCard } from "./common/daily";
import { useWeatherData } from "hooks/useWeatherData";

function App() {
  const { currentWeather, hourlyForecast, dailyForecast } = useWeatherData();

  return (
    <main>
      <Header {...currentWeather} />
      <HourlyCard items={hourlyForecast} />
      <DailyCard items={dailyForecast} />
    </main>
  );
}

export default App;
