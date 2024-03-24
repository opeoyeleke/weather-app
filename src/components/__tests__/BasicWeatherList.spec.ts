import { test, describe } from "vitest";
import { mount } from "@vue/test-utils";
import BasicWeatherList from "../UI/BasicWeatherList.vue";
import type { WeatherData } from "@/types/weather";

describe("BasicWeatherList.vue", () => {
  test("renders without crashing", async ({ expect }) => {
    const wrapper = mount(BasicWeatherList, {
      props: {
        weatherList: [],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("renders weather cards when weatherList is not empty", async ({
    expect,
  }) => {
    const weatherList: WeatherData[] = [
      {
        coord: { lon: 3.3903, lat: 6.4474 },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        base: "stations",
        main: {
          temp: 29.18,
          feels_like: 36.18,
          temp_min: 29.18,
          temp_max: 29.18,
          pressure: 1010,
          humidity: 84,
        },
        visibility: 10000,
        wind: { speed: 3.6, deg: 160 },
        clouds: { all: 20 },
        dt: 1711323833,
        sys: {
          type: 1,
          id: 1185,
          country: "NG",
          sunrise: 1711345679,
          sunset: 1711389388,
        },
        timezone: 3600,
        id: 2332459,
        name: "Lagos",
        cod: 200,
      },
    ];
    const wrapper = mount(BasicWeatherList, {
      props: {
        weatherList,
      },
    });
    expect(wrapper.findAll(".basic-weather-list__item").length).toBe(
      weatherList.length
    );
  });

  test("renders empty state when weatherList is empty", async ({ expect }) => {
    const wrapper = mount(BasicWeatherList, {
      props: {
        weatherList: [],
      },
    });
    expect(wrapper.find(".empty_state").exists()).toBe(true);
  });
});
