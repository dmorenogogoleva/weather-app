import { useEffect, useState } from "react";
import * as api from "api";
import { TIntervalData, TCurrentData, TDailyData } from "types";
import { mapApiResponse } from "api/mappers/mapApiResponse";
import { setToStore, getFromStore } from "lib/weatherStorageManager";
import toast from "react-hot-toast";

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
    const storedData = getFromStore();

    if (storedData) {
      const { storedCurrent, storedDaily, storedHourly } = storedData;
      setCurrentWeather(storedCurrent);
      setDailyForecast(storedDaily);
      setHourlyForecast(storedHourly);
      setIsLoading(false);
      return;
    }

    async function fetch() {
      const coords = await new Promise<GeolocationCoordinates>((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (p) => resolve(p.coords),
          (e) => toast.error(e.message),
          { enableHighAccuracy: false, maximumAge: 3600 * 1000 * 24 }
        );
      });

      if (!coords) return;

      try {
        const { latitude, longitude } = coords;
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

        setToStore({ current, daily, hourly });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  return { currentWeather, hourlyForecast, dailyForecast, isLoading };
}
