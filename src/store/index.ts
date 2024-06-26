import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import { mutations } from "./mutations";
import type { CurrentLocation } from "@/types/location";
import type { WeatherData } from "@/types/weather";

export interface State {
  currentLocation: CurrentLocation;
  currentWeather: WeatherData | null;
  nextFiveDaysWeather: WeatherData[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentLocation: {
      city: "",
      region: "",
      country: "",
      latitude: 0,
      longitude: 0,
    },
    currentWeather: null,
    nextFiveDaysWeather: [],
  },
  mutations,
});

export function useStore() {
  return baseUseStore(key);
}
