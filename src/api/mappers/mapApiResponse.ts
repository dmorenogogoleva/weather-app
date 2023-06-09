import {
  GetCurrentResponse,
  GetDailyResponse,
  GetHourlyResponse,
} from "api/types";
import {
  CURRENT_TIME,
  head,
  getIconName,
  formatTemperature,
  formatTime,
  formatDate,
} from "utils";

import { TDailyData, TCurrentData, TIntervalData } from "types";

function mapHourlyApiResponse(
  response: GetHourlyResponse,
  current: TCurrentData
): TIntervalData[] {
  const responseData = response.data.data.map((i) => ({
    id: i.timestamp_local,
    temp: formatTemperature(i.temp),
    time: formatTime(i.timestamp_local),
    humidity: i.rh,
    weather: i.weather.description,
    iconName: getIconName(i.weather.code),
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

function mapDailyApiResponse(response: GetDailyResponse): TDailyData[] {
  return response.data.data.map((i) => ({
    id: i.valid_date,
    tempMin: formatTemperature(i.min_temp),
    tempMax: formatTemperature(i.max_temp),
    temp: formatTemperature(i.temp),
    time: formatDate(i.valid_date),
    humidity: i.rh,
    weather: i.weather.description,
    iconName: getIconName(i.weather.code),
  }));
}

function mapCurrentApiResponse(
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

export function mapApiResponse({
  currentResponse,
  hourlyResponse,
  dailyResponse,
}: {
  currentResponse: GetCurrentResponse;
  hourlyResponse: GetHourlyResponse;
  dailyResponse: GetDailyResponse;
}): { current: TCurrentData; daily: TDailyData[]; hourly: TIntervalData[] } {
  const daily = mapDailyApiResponse(dailyResponse);
  const current = mapCurrentApiResponse(currentResponse, head(daily));
  const hourly = mapHourlyApiResponse(hourlyResponse, current);

  return { current, daily, hourly };
}
