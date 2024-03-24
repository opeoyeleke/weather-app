<script setup lang="ts">
import BasicWeatherCard from "./BasicWeatherCard.vue";
import type { WeatherData } from "@/types/weather";
</script>

<template>
  <div class="basic-weather-list">
    <div
      class="basic-weather-list__item"
      v-for="weather in weatherList"
      :key="weather.dt"
    >
      <BasicWeatherCard :weather="weather" />
    </div>
  </div>

  <div v-if="weatherList?.length === 0" class="empty_state">
    Fetching weather data...
  </div>
</template>

<script lang="ts">
export default {
  props: {
    weatherList: Array as () => WeatherData[],
  },
};
</script>

<style>
.basic-weather-list {
  margin: 24px auto 0;
  max-width: 1315px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

.basic-weather-list__item {
  display: flex;
  justify-content: center;
  width: 33%;
  max-width: 250px;

  @media screen and (max-width: 768px) {
    width: calc(50% - 8px);
  }
}
</style>
