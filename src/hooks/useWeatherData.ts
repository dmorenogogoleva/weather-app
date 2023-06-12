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
  const [hourlyForecast, setHourlyForecast] = useState<TIntervalData[]>();
  const [dailyForecast, setDailyForecast] = useState<TDailyData[]>();
  const [currentWeather, setCurrentWeather] = useState<TCurrentData>();
  const [isLoading, setIsLoading] = useState(true);

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

    (async function () {
      const [coords, error] = await new Promise<
        [GeolocationCoordinates | null, unknown]
      >((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => resolve([coords, null]),
          (error) => reject([null, error]),
          { enableHighAccuracy: false, maximumAge: 3600 * 1000 * 24 }
        );
      });

      if (!coords) {
        console.error(
          error instanceof Error
            ? error?.message
            : "Failed to load current position"
        );
        return;
      }

      if (!coords) return;
      const { latitude, longitude } = coords;
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
  }, []);

  return { currentWeather, hourlyForecast, dailyForecast, isLoading };
}
