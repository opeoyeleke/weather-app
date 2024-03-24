<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import AppHeader from "@/components/UI/AppHeader.vue";
import SwitchComponent from "@/components/UI/SwitchComponent.vue";
import TodayWeather from "@/components/UI/TodayWeather.vue";
import BasicWeatherList from "@/components/UI/BasicWeatherList.vue";

import { useStore } from "@/store";
import { getGeolocationInformation } from "@/services/location";
import {
  getCurrentWeatherData,
  getForecastWeatherData,
} from "@/services/weather";
import { reduceWeatherList } from "@/util/util";

import { ActionTypes } from "@/store/actions";
import type { CurrentLocation } from "@/types/location";
import type { WeatherData, WeatherForecastData } from "@/types/weather";

const store = useStore();
const location = computed<CurrentLocation>(() => store.state.currentLocation);
const nextFiveDaysWeather = computed<WeatherData[]>(
  () => store.state.nextFiveDaysWeather
);

const getUserLocation = async () => {
  try {
    const res: CurrentLocation = await getGeolocationInformation();
    store.commit(ActionTypes.SET_LOCATION, res);
  } catch (error) {
    console.log(error);
  }
};

const getWeatherInfo = async (longitude: number, latitude: number) => {
  try {
    const res: WeatherData = await getCurrentWeatherData(latitude, longitude);
    store.commit(ActionTypes.SET_WEATHER, res);
  } catch (error) {
    console.log(error);
  }
};

const getForcastData = async (longitude: number, latitude: number) => {
  try {
    const res: WeatherForecastData = await getForecastWeatherData(
      latitude,
      longitude
    );

    const reducedList = reduceWeatherList(res.list);

    store.commit(ActionTypes.SET_NEXT_FIVE_DAYS_WEATHER, reducedList.slice(-5));
  } catch (error) {
    console.log(error);
  }
};

watch(location, (newLocation) => {
  const { longitude, latitude } = newLocation;

  if (longitude && latitude) {
    getWeatherInfo(longitude, latitude);
    getForcastData(longitude, latitude);
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
    <BasicWeatherList
      v-else-if="selectedValue === 'next5days'"
      :weatherList="nextFiveDaysWeather"
    />
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
