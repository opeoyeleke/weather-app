<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import type { WeatherData } from "@/types/weather";
import { formatUnixTime } from "@/util/util";
import type { CurrentLocation } from "@/types/location";

const store = useStore();
const weatherData = computed<WeatherData | null>(
  () => store.state.currentWeather
);
const location = computed<CurrentLocation>(() => store.state.currentLocation);
</script>

<template>
  <div v-if="weatherData" class="today-weather">
    <div class="today-weather__header">
      <h2>
        Today in {{ location.city }}{{ location.city && "," }}
        {{ location.country }}
      </h2>

      <p>{{ new Date(weatherData.dt * 1000).toDateString() }}</p>
    </div>

    <div class="today-weather__body">
      <div class="today-weather__body__top">
        <div class="today-weather__body__top__left">
          <img
            :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`"
            alt="weather icon"
          />

          <div class="today-weather__body__top__temp">
            <h3>{{ weatherData.main.temp }}°C</h3>
            <div>Feels like {{ weatherData.main.feels_like }}°C</div>
          </div>
        </div>

        <p class="capitalize">
          {{ weatherData.weather[0].description }}
        </p>
      </div>

      <div class="today-weather__body__bottom">
        <div class="today-weather__body__bottom__details">
          <div>
            <p>Max Temp:</p>
            <p>{{ weatherData.main.temp_max }}°C</p>
          </div>

          <div>
            <p>Min Temp:</p>
            <p>{{ weatherData.main.temp_min }}°C</p>
          </div>

          <div>
            <p>Sunrise:</p>
            <p>
              {{ formatUnixTime(weatherData.sys.sunrise) }}
            </p>
          </div>

          <div>
            <p>Sunset:</p>
            <p>
              {{ formatUnixTime(weatherData.sys.sunset) }}
            </p>
          </div>
        </div>

        <div class="today-weather__body__bottom__details">
          <div>
            <p>Humidity:</p>
            <p>{{ weatherData.main.humidity }}%</p>
          </div>

          <div>
            <p>Wind:</p>
            <p>{{ weatherData.wind.speed }} km/h</p>
          </div>

          <div>
            <p>Pressure:</p>
            <p>{{ weatherData.main.pressure }} hPa</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="empty_state">Fetching data...</div>
</template>

<style>
.today-weather {
  max-width: 700px;
  margin: 24px auto 0;
  background-color: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    border-radius: 0;
  }
}

.today-weather__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #e0eaf1;
  padding: 8px 16px;
}

.today-weather__header h2 {
  font-size: 20px;
  font-weight: 500;
}

.today-weather__header p {
  font-size: 16px;
  color: #666;
}

.today-weather__body {
  gap: 16px;
  padding: 24px 16px 48px;
}

.today-weather__body__top {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.today-weather__body__top__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.today-weather__body__top img {
  width: 100px;
  background: white;
  border-radius: 50%;
  border: 2px solid #bdbdbd;

  @media screen and (max-width: 600px) {
    width: 60px;
  }
}

.today-weather__body__top__temp h3 {
  font-size: 44px;
  margin: 0;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
}

.today-weather__body__top__temp div {
  font-size: 14px;
  color: #666;
}

.today-weather__body__bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.today-weather__body__bottom__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
}

.today-weather__body__bottom__details:first-child {
  margin-left: 120px;

  @media screen and (max-width: 600px) {
    margin-left: 80px;
  }
}

.today-weather__body__bottom__details div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.today-weather__body__bottom__details p {
  font-size: 15px;
  margin: 0;
}

.today-weather__body__bottom__details p:first-child {
  font-size: 13px;
  color: #898989;
}

.empty_state {
  text-align: center;
  margin: 52px auto 0;
  font-size: 16px;
  line-height: 150%;
  color: #666;
  max-width: 500px;
}
</style>
