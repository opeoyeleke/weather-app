import type { WeatherData } from "@/types/weather";

export const formatUnixTime = (timestamp: number): string => {
  const time = new Date(timestamp * 1000);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(time);

  return formattedTime;
};

export const getDayOfWeek = (timestamp: number): string => {
  const time = new Date(timestamp * 1000);

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(time);

  return dayOfWeek;
};

export const reduceWeatherList = (
  weatherData: WeatherData[]
): WeatherData[] => {
  const dateMap: { [key: string]: WeatherData } = {};

  for (const data of weatherData) {
    const date = new Date(data.dt * 1000);
    const dateString = date.toISOString().split("T")[0];

    if (
      !dateMap[dateString] ||
      dateMap[dateString].main.temp_max < data.main.temp_max
    ) {
      dateMap[dateString] = data;
    }
  }

  return Object.values(dateMap);
};
