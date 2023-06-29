type TWeather = {
  description: string;
  code: number;
  icon: string;
};

type TIntervalApi = {
  temp: number;
  pop: number;
  weather: TWeather;
};

type THourlyApi = {
  timestamp_local: string;
} & TIntervalApi;

type HourlyResponseData = {
  city_name: string;
  data: THourlyApi[];
};

export type GetHourlyResponse = {
  data: HourlyResponseData;
};

type TDailyApi = {
  max_temp: number;
  min_temp: number;
  valid_date: string;
} & TIntervalApi;

type DailyResponseData = {
  count: number;
  data: TDailyApi[];
};

export type GetDailyResponse = {
  data: DailyResponseData;
};

type TCurrentApi = {
  city_name: string;
  ob_time: string;
  temp: number;
  weather: TWeather;
};

type CurrentResponseData = {
  count: number;
  data: TCurrentApi[];
};

export type GetCurrentResponse = {
  data: CurrentResponseData;
};
