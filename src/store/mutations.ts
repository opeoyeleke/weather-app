import type { LocationState } from "../types/location";
import type { State } from "./index";

export const mutations = {
  updateLocation(state: State, payload: LocationState) {
    state.currentLocation = payload;
  },
};
