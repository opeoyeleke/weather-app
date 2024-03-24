import axios, { type AxiosResponse } from "axios";
import type { WeatherR } from "@/types/weather";

const baseURL = "https://api.openweathermap.org/data/2.5";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCurrentWeatherData = async (
  latitude: number,
  longitude: number
) => {
  return new Promise<WeatherR>((resolve, reject) => {
    axios
      .get(
        `${baseURL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
      .then((response: AxiosResponse<WeatherR>) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
