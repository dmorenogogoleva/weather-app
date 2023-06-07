import axios from "axios";
import { GetWeatherResponse } from "./types";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export function getHourlyWeather(
  lat: number,
  lon: number
): Promise<GetWeatherResponse> {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    lat,
    lon,
  };

  return api.get("/forecast/hourly", { params });
}

export async function getDailyWeather(
  lat: number,
  lon: number
): Promise<GetWeatherResponse> {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    lat,
    lon,
  };

  return api.get("/forecast/daily", { params });
}
