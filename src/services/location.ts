import type { GetGeoLocationR, CurrentLocation } from "@/types/location";
import axios, { type AxiosResponse } from "axios";

export const getGeolocationInformation = async () => {
  return new Promise<CurrentLocation>((resolve, reject) => {
    const apiKey = import.meta.env.VITE_GEO_API_KEY;

    axios
      .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
      .then((response: AxiosResponse<GetGeoLocationR>) => {
        const { city, country, region } = response.data;

        resolve({
          city,
          country,
          region,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
