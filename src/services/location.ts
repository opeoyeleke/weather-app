import type { GetGeoLocationR, CurrentLocation } from "@/types/location";
import axios, { type AxiosResponse } from "axios";

const apiKey = import.meta.env.VITE_GEO_API_KEY;

export const getGeolocationInformation = async () => {
  return new Promise<CurrentLocation>((resolve, reject) => {
    axios
      .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
      .then((response: AxiosResponse<GetGeoLocationR>) => {
        const { city, country, region, longitude, latitude } = response.data;

        resolve({
          city,
          country,
          region,
          longitude,
          latitude,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
