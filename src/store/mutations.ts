import type { CurrentLocation } from "@/types/location";
import type { WeatherData } from "@/types/weather";
import type { State } from "./index";

export const mutations = {
  setLocation(state: State, payload: CurrentLocation) {
    state.currentLocation = payload;
  },

  setWeather(state: State, payload: WeatherData) {
    state.currentWeather = payload;
  },

  setNextFiveDaysWeather(state: State, payload: WeatherData[]) {
    state.nextFiveDaysWeather = payload;
  },
};
