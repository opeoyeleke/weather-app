<script setup lang="ts">
import { computed } from "vue";
import LocationIcon from "../icons/LocationIcon.vue";
import type { LocationState } from "../../types/location";
import { useStore } from "@/store";

const store = useStore();
const location = computed<LocationState>(() => store.state.currentLocation);
</script>

<template>
  <div class="header">
    <div class="header_location">
      <LocationIcon />

      <span v-if="location.city">
        {{ location.city }}, {{ location.country }}
      </span>
      <span v-else>Search for a location</span>
    </div>

    <div class="header_search">
      <input
        type="text"
        placeholder="Search city"
        v-model="searchInput"
        @keyup.enter="searchCity"
      />

      <button @click="searchCity">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchInput: "",
    };
  },

  methods: {
    searchCity() {
      console.log(this.searchInput);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
}

.header_location {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.header_search {
  display: flex;
  width: 50%;
  max-width: 300px;
}

input {
  width: calc(100% - 1rem);
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: rgb(86, 149, 172);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transform: translateX(-2px);
}

input:focus-visible {
  outline: none;
  border-color: rgb(86, 149, 172);
}
</style>
../../types/location
