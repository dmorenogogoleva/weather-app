import { useEffect, useState } from "react";
import * as api from "api";
import { TIntervalData, TCurrentData, TDailyData } from "types";
import { mapApiResponse } from "api/mappers/mapApiResponse";

export function useWeatherData(): {
  currentWeather?: TCurrentData;
  hourlyForecast?: TIntervalData[];
  dailyForecast?: TDailyData[];
  isLoading: boolean;
} {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [hourlyForecast, setHourlyForecast] = useState<TIntervalData[]>();
  const [dailyForecast, setDailyForecast] = useState<TDailyData[]>();
  const [currentWeather, setCurrentWeather] = useState<TCurrentData>();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        const [currentResponse, hourlyResponse, dailyResponse] =
          await Promise.all([
            api.getCurrentWeather(latitude, longitude),
            api.getHourlyWeather(latitude, longitude),
            api.getDailyWeather(latitude, longitude),
          ]);

        const { current, daily, hourly } = mapApiResponse({
          currentResponse,
          hourlyResponse,
          dailyResponse,
        });

        setCurrentWeather(current);
        setDailyForecast(daily);
        setHourlyForecast(hourly);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [coords]);

  return { currentWeather, hourlyForecast, dailyForecast, isLoading };
}
