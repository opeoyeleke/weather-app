<script setup lang="ts">
import axios, { type AxiosResponse } from "axios";
import { onMounted } from "vue";
import { useStore } from "./store";
import AppHeader from "./components/UI/AppHeader.vue";
import type { GetGeoLocationR } from "./types/location";

const store = useStore();

const getGeolocationInformation = async () => {
  const API_KEY = "43905efea8ad45b0be70d401dcdd7c39";

  axios
    .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`)
    .then((response: AxiosResponse<GetGeoLocationR>) => {
      const { city, country, region } = response.data;
      store.commit("updateLocation", { city, country, region });
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getGeolocationInformation();
});
</script>

<template>
  <AppHeader />
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
