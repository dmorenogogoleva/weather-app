import { useEffect, useState } from "react";
import * as api from "api";
import { transformApiResponse } from "utils";
import { TIntervalData, TCurrentData, TDailyData } from "types";

export function useWeatherData(): {
  currentWeather?: TCurrentData;
  hourlyForecast?: TIntervalData[];
  dailyForecast?: TDailyData[];
} {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [hourlyForecast, setHourlyForecast] = useState<TIntervalData[]>();
  const [dailyForecast, setDailyForecast] = useState<TDailyData[]>();
  const [currentWeather, setCurrentWeather] = useState<TCurrentData>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    if (!coords) return;

    const { latitude, longitude } = coords;
    // todo: add cache
    (async function getWeather() {
      try {
        const [currentResponse, hourlyResponse, dailyResponse] =
          await Promise.all([
            api.getCurrentWeather(latitude, longitude),
            api.getHourlyWeather(latitude, longitude),
            api.getDailyWeather(latitude, longitude),
          ]);

        const { current, daily, hourly } = transformApiResponse({
          currentResponse,
          hourlyResponse,
          dailyResponse,
        });

        setCurrentWeather(current);
        setDailyForecast(daily);
        setHourlyForecast(hourly);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [coords]);

  return { currentWeather, hourlyForecast, dailyForecast };
}
