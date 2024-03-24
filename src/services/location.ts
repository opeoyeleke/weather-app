import type {
  GetGeoLocationR,
  CurrentLocation,
  GeoapifyLocation,
} from "@/types/location";
import axios, { AxiosError, type AxiosResponse } from "axios";

export const getGeolocationInformation = async () => {
  return new Promise<CurrentLocation>((resolve, reject) => {
    const apiKey = import.meta.env.VITE_GEO_API_KEY;

    axios
      .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
      .then((response: AxiosResponse<GetGeoLocationR>) => {
        const { city, country, longitude, latitude } = response.data;

        resolve({
          city,
          country,
          longitude,
          latitude,
        });
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

export const getGeodataWithSearch = async (search: string) => {
  return new Promise<GeoapifyLocation[]>((resolve, reject) => {
    const geoapifyKey = import.meta.env.VITE_GEOAPIFY_KEY;

    axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?text=${search}&format=json&apiKey=${geoapifyKey}`
      )
      .then((response: AxiosResponse<{ results: GeoapifyLocation[] }>) => {
        resolve(response.data.results);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
