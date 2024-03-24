import type { CurrentLocation } from "@/types/location";
import type { WeatherR } from "@/types/weather";
import type { State } from "./index";

export const mutations = {
  updateLocation(state: State, payload: CurrentLocation) {
    state.currentLocation = payload;
  },

  updateWeather(state: State, payload: WeatherR) {
    state.currentWeather = payload;
  },
};
