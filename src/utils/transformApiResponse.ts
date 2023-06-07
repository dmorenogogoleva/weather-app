import {
  GetCurrentResponse,
  GetDailyResponse,
  GetHourlyResponse,
} from "api/types";
import { CURRENT_TIME, CURRENT_DAY, DEGREE_SYMBOL } from "./config";
import { head } from "./head";
import { getWeekday } from "./getWeekday";
import { TDailyData, TCurrentData, TIntervalData } from "types";

function formatTemperature(temp: number) {
  return `${Math.round(temp)}${DEGREE_SYMBOL}`;
}

function formatTime(datetime: string) {
  return new Date(datetime).getHours().toString();
}

function formatDate(date: string) {
  return new Date(date).getDate() === new Date().getDate()
    ? CURRENT_DAY
    : getWeekday(date);
}

function transformHourlyApiResponse(
  response: GetHourlyResponse,
  current: TCurrentData
): TIntervalData[] {
  const responseData = response.data.data.map((i) => ({
    id: i.timestamp_local,
    temp: formatTemperature(i.temp),
    time: formatTime(i.timestamp_local),
    humidity: i.rh,
    weather: i.weather.description,
  }));

  return [
    {
      id: CURRENT_TIME,
      time: CURRENT_TIME,
      temp: current.temp,
      weather: current.weather,
    },
    ...responseData,
  ];
}

function transformDailyApiResponse(response: GetDailyResponse): TDailyData[] {
  return response.data.data.map((i) => ({
    id: i.valid_date,
    tempMin: formatTemperature(i.min_temp),
    tempMax: formatTemperature(i.max_temp),
    temp: formatTemperature(i.temp),
    time: formatDate(i.valid_date),
    humidity: i.rh,
    weather: i.weather.description,
  }));
}

function transformCurrentApiResponse(
  response: GetCurrentResponse,
  today?: TDailyData
): TCurrentData {
  const curr = response.data.data[0];
  return {
    city: curr.city_name,
    temp: formatTemperature(curr.temp),
    weather: curr.weather.description,
    tempMax: today?.tempMax,
    tempMin: today?.tempMin,
  };
}

export function transformApiResponse({
  currentResponse,
  hourlyResponse,
  dailyResponse,
}: {
  currentResponse: GetCurrentResponse;
  hourlyResponse: GetHourlyResponse;
  dailyResponse: GetDailyResponse;
}): { current: TCurrentData; daily: TDailyData[]; hourly: TIntervalData[] } {
  const daily = transformDailyApiResponse(dailyResponse);
  const current = transformCurrentApiResponse(currentResponse, head(daily));
  const hourly = transformHourlyApiResponse(hourlyResponse, current);

  return { current, daily, hourly };
}
