type TWeather = {
  description: string;
  code: number;
  icon: string;
};

export type TIntervalData = {
  app_max_temp: number;
  app_min_temp: number;
  temp: number;
  rh: number;
  weather: TWeather;
};

export type GetWeatherResponse = {
  city_name: string;
  data: TIntervalData[];
};
