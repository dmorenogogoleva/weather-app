import axios from "axios";
import {
  GetCurrentResponse,
  GetDailyResponse,
  GetHourlyResponse,
} from "./types";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export function getCurrentWeather(
  lat: number,
  lon: number
): Promise<GetCurrentResponse> {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    lat,
    lon,
  };

  return api.get("/current", { params });
}

export function getHourlyWeather(
  lat: number,
  lon: number
): Promise<GetHourlyResponse> {
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
): Promise<GetDailyResponse> {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    lat,
    lon,
  };

  return api.get("/forecast/daily", { params });
}
