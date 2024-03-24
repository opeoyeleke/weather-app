import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import { mutations } from "./mutations";
import type { LocationState } from "@/types/location";

export interface State {
  currentLocation: LocationState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentLocation: {
      city: "",
      region: "",
      country: "",
    },
  },
  mutations,
});

export function useStore() {
  return baseUseStore(key);
}
