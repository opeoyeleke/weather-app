import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BasicWeatherCard from "../UI/BasicWeatherCard.vue";

describe("BasicWeatherCard.vue", () => {
  it("renders properly with valid weather data", () => {
    const weatherData = {
      coord: { lon: 3.3903, lat: 6.4474 },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      base: "stations",
      main: {
        temp: 30.18,
        feels_like: 37.18,
        temp_min: 30.18,
        temp_max: 30.18,
        pressure: 1008,
        humidity: 79,
      },
      visibility: 10000,
      wind: { speed: 4.12, deg: 230 },
      clouds: { all: 20 },
      dt: 1616582400,
      sys: {
        type: 1,
        id: 1185,
        country: "NG",
        sunrise: 1711259309,
        sunset: 1711302996,
      },
      timezone: 3600,
      id: 2332459,
      name: "Lagos",
      cod: 200,
    };

    const wrapper = shallowMount(BasicWeatherCard, {
      props: { weather: weatherData },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".basic-weather-card__header h3").text()).toBe("Wed");
    expect(wrapper.find(".basic-weather-card__header p").text()).toBe(
      "few clouds"
    );
    expect(wrapper.find(".basic-weather-card__body__temp p").text()).toBe(
      "30.18°C"
    );
    expect(
      wrapper.find(".basic-weather-card__body__icon img").attributes("src")
    ).toBe("http://openweathermap.org/img/wn/02n.png");
  });

  it("handles invalid weather data", () => {
    const invalidWeatherData = null;

    const wrapper = shallowMount(BasicWeatherCard, {
      props: { weather: invalidWeatherData },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("No weather data available");
  });
});
