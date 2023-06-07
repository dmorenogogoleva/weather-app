import React, { useEffect, useState } from "react";
import "../style.css";

import {
  currentWeather,
  hourly as hourlyForecast,
  dailyForecast,
} from "../data";
import { Header } from "./common/header";
import { HourlyCard } from "./common/hourly";
import { DailyCard } from "./common/daily";

function App() {
  const [current, setCurrent] = useState(currentWeather);
  const [hourly, setForecast] = useState(hourlyForecast);
  const [daily, setDaily] = useState(dailyForecast);

  if (!hourly.length || !daily.length) {
    const forecast = localStorage.getItem("forecast");
    const daily = localStorage.getItem("daily");

    try {
      const forecastData = JSON.parse(forecast!);
      if (forecastData) setForecast(forecastData);

      const dailyData = JSON.parse(daily!);
      if (dailyData) setDaily(dailyData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude: lat, longitude: lon } = pos.coords;

      setCurrent({
        ...current,
        location: { name: "Current Location", lat, lon },
      });
    });
  }, []);

  useEffect(() => {
    async function getWeather() {
      const apiKey = "";
      const locationKey = "";
      const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setCurrent(data.current);
      setForecast(data.hourly);

      localStorage.setItem("forecast", JSON.stringify(data.hourly));
    }
  }, []);

  return (
    <main>
      <Header current={current} />
      <HourlyCard items={hourly} />
      <DailyCard items={daily as any} />
    </main>
  );
}

export default App;
