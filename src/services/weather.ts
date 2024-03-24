import axios, { type AxiosResponse } from "axios";
import type { WeatherData, WeatherForecastData } from "@/types/weather";

const baseURL = "https://api.openweathermap.org/data/2.5";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCurrentWeatherData = async (
  latitude: number,
  longitude: number
) => {
  return new Promise<WeatherData>((resolve, reject) => {
    axios
      .get(
        `${baseURL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
      .then((response: AxiosResponse<WeatherData>) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getForecastWeatherData = async (
  latitude: number,
  longitude: number
) => {
  return new Promise<WeatherForecastData>((resolve, reject) => {
    axios
      .get(
        `${baseURL}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
      .then((response: AxiosResponse<WeatherForecastData>) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
