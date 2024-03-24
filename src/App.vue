<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "./store";
import AppHeader from "./components/UI/AppHeader.vue";
import { getGeolocationInformation } from "./services/location";
import { ActionTypes } from "./store/actions";
import type { CurrentLocation } from "@/types/location";

const store = useStore();

const getUserLocation = () => {
  getGeolocationInformation()
    .then((location: CurrentLocation) => {
      store.commit(ActionTypes.UPDATE_LOCATION, location);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getUserLocation();
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
