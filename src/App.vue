<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import AppHeader from "@/components/UI/AppHeader.vue";
import SwitchComponent from "@/components/UI/SwitchComponent.vue";
import TodayWeather from "@/components/UI/TodayWeather.vue";

import { useStore } from "@/store";
import { getGeolocationInformation } from "@/services/location";
import { getCurrentWeatherData } from "@/services/weather";

import { ActionTypes } from "@/store/actions";
import type { CurrentLocation } from "@/types/location";
import type { WeatherR } from "@/types/weather";

const store = useStore();
const location = computed<CurrentLocation>(() => store.state.currentLocation);

const getUserLocation = () => {
  getGeolocationInformation()
    .then((res: CurrentLocation) => {
      store.commit(ActionTypes.UPDATE_LOCATION, res);
    })
    .catch((error) => {
      console.log(error);
    });
};

watch(location, (newLocation) => {
  const { longitude, latitude } = newLocation;

  if (longitude && latitude) {
    getCurrentWeatherData(latitude, longitude)
      .then((res: WeatherR) => {
        console.log(res);
        store.commit(ActionTypes.UPDATE_WEATHER, res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

onMounted(() => {
  getUserLocation();
});
</script>

<template>
  <AppHeader />

  <div>
    <SwitchComponent
      :value="selectedValue"
      @update:value="updateSelectedValue"
    />

    <TodayWeather v-if="selectedValue === 'today'" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selectedValue: "today",
    };
  },

  methods: {
    updateSelectedValue(value: string) {
      this.selectedValue = value;
    },
  },
};
</script>
