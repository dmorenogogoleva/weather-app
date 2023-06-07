import { useEffect, useState } from "react";
import * as api from "api";
import { TIntervalData } from "api/types";

export function useWeatherData() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [city, setCity] = useState<string>("-");
  const [hourlyForecast, setHourlyForecast] = useState<TIntervalData[]>();
  const [dailyForecast, setDailyForecast] = useState<TIntervalData[]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    if (!coords) return;

    const { latitude, longitude } = coords;

    (async function getWeather() {
      try {
        const [hourlyResponse, dailyResponse] = await Promise.all([
          api.getHourlyWeather(latitude, longitude),
          api.getDailyWeather(latitude, longitude),
        ]);

        setCity(hourlyResponse.city_name);
        setHourlyForecast(dailyResponse.data);
        setDailyForecast(dailyResponse.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [coords]);

  return { city, hourlyForecast, dailyForecast };
}
