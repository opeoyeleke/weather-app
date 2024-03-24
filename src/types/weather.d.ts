export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };

  clouds: {
    all: number;
  };
  dt: number;
  dt_txt?: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherForecastData {
  cnt: number;
  cod: string;
  list: WeatherData[];
  city: {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
