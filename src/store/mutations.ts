import type { CurrentLocation } from "../types/location";
import type { State } from "./index";

export const mutations = {
  updateLocation(state: State, payload: CurrentLocation) {
    state.currentLocation = payload;
  },
};
