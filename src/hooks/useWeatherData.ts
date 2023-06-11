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
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords(coords);
      },
      console.error,
      { maximumAge: 3600 * 1000 }
    );
  }, []);

  useEffect(() => {
    const storedCurrent = localStorage.getItem("current");
    const storedDaily = localStorage.getItem("daily");
    const storedHourly = localStorage.getItem("hourly");
    const timestamp = localStorage.getItem("timestamp");

    const isStoredDataActual =
      new Date(Number(timestamp)).getDate() === new Date().getDate() &&
      new Date(Number(timestamp)).getHours() === new Date().getHours();

    if (isStoredDataActual && storedCurrent && storedDaily && storedHourly) {
      setCurrentWeather(JSON.parse(storedCurrent));
      setDailyForecast(JSON.parse(storedDaily));
      setHourlyForecast(JSON.parse(storedHourly));
      setIsLoading(false);
      return;
    }

    if (!coords) return;
    const { latitude, longitude } = coords;

    (async function getWeather() {
      try {
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

        localStorage.setItem("current", JSON.stringify(current));
        localStorage.setItem("daily", JSON.stringify(daily));
        localStorage.setItem("hourly", JSON.stringify(hourly));
        localStorage.setItem("timestamp", JSON.stringify(Date.now()));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [coords]);

  return { currentWeather, hourlyForecast, dailyForecast, isLoading };
}
