<script setup lang="ts">
import type { WeatherData } from "@/types/weather";
import { getDayOfWeek } from "@/util/util";
</script>

<template>
  <div v-if="weather" class="basic-weather-card">
    <div class="basic-weather-card__header">
      <h3>
        {{ getDayOfWeek(weather.dt) }}
      </h3>
      <p class="capitalize">{{ weather.weather[0].description }}</p>
    </div>

    <div class="basic-weather-card__body">
      <div class="basic-weather-card__body__temp">
        <p>{{ weather.main.temp }}°C</p>
      </div>

      <div class="basic-weather-card__body__icon">
        <img
          :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`"
          :alt="weather?.weather[0]?.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    weather: Object as () => WeatherData,
  },
};
</script>

<style>
.basic-weather-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  border: 1px solid #ececec;
  width: 100%;
}

.basic-weather-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basic-weather-card__header h3 {
  font-size: 20px;
  font-weight: 600;
}

.basic-weather-card__header p {
  font-size: 16px;
  color: #666;
}

.basic-weather-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basic-weather-card__body__temp p {
  font-size: 32px;
  font-weight: 600;
}

.basic-weather-card__body__icon img {
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
}

@media (max-width: 768px) {
  .basic-weather-card {
    padding: 8px;
  }

  .basic-weather-card__header h3 {
    font-size: 20px;
  }

  .basic-weather-card__header p {
    font-size: 14px;
  }

  .basic-weather-card__body__temp p {
    font-size: 28px;
  }

  .basic-weather-card__body__icon img {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 480px) {
  .basic-weather-card {
    padding: 8px;
  }

  .basic-weather-card__header h3 {
    font-size: 18px;
  }

  .basic-weather-card__header p {
    font-size: 12px;
  }

  .basic-weather-card__body__temp p {
    font-size: 24px;
  }

  .basic-weather-card__body__icon img {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 320px) {
  .basic-weather-card {
    padding: 8px;
  }

  .basic-weather-card__header h3 {
    font-size: 16px;
  }

  .basic-weather-card__header p {
    font-size: 10px;
  }

  .basic-weather-card__body__temp p {
    font-size: 20px;
  }

  .basic-weather-card__body__icon img {
    width: 30px;
    height: 30px;
  }
}
</style>
