export interface FetchResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export type RequestConfig = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: object;
};

export interface ITemp {
  temp: string;
  temp_max: string;
  temp_min: string;
  humidity: string;
}

export interface IWeatherResponse {
  main: any;
  name: string;
  sys: any;
  weather: any;
  id: number;
  dt: number;
}

export interface IWeather {
  id: number;
  city: string;
  country: string;
}

export interface ISearchHistory {
  searchedTime: string;
  weather: IWeather;
}

export interface IOnSearchProps {
  city: string;
  country: string;
}

export interface ISearchBarProps {
  onSearch: (data: IOnSearchProps) => void;
  isClear: boolean;
}

export interface ISearchHistoryProps {
  onSearch: (data: IOnSearchProps) => void;
}

export interface IWeatherDetailProps {
  data: IWeatherResponse;
}
