<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "@/store";
import { getGeodataWithSearch } from "@/services/location";
import { ActionTypes } from "@/store/actions";
import type { CurrentLocation, GeoapifyLocation } from "../../types/location";
import LocationIcon from "../icons/LocationIcon.vue";

const store = useStore();
const location = computed<CurrentLocation>(() => store.state.currentLocation);

const searchInput = ref("");
const searchResults = ref<GeoapifyLocation[]>([]);
const loading = ref(false);

const searchLocation = async () => {
  loading.value = true;

  try {
    const res: GeoapifyLocation[] = await getGeodataWithSearch(
      searchInput.value
    );
    searchResults.value = res;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const selectLocation = (location: GeoapifyLocation) => {
  searchInput.value = "";
  searchResults.value = [];

  console.log(location);

  const payload: CurrentLocation = {
    city: location.city || location.state,
    country: location.country,
    latitude: location.lat,
    longitude: location.lon,
  };

  store.commit(ActionTypes.SET_LOCATION, payload);
};

watch(searchInput, () => {
  if (searchResults.value.length > 0) {
    searchResults.value = [];
  }
});
</script>

<template>
  <div class="header">
    <div class="header_location">
      <LocationIcon />

      <span v-if="location.city || location.country">
        {{ location.city }}{{ location.city && "," }} {{ location.country }}
      </span>
      <span v-else>Search for a location</span>
    </div>

    <div class="header_search">
      <input
        type="text"
        placeholder="Search city"
        v-model="searchInput"
        @keyup.enter="searchLocation"
        :disabled="loading"
      />

      <button @click="searchLocation" :disabled="loading">
        {{ loading ? "Loading" : "Search" }}
      </button>

      <div v-if="searchResults.length > 0" class="suggestions_list">
        <div
          v-for="suggestion in searchResults"
          :key="suggestion.place_id"
          class="suggestion_item"
          @click="selectLocation(suggestion)"
        >
          {{ suggestion.formatted }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ececec;
}

.header_location {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.header_search {
  display: flex;
  width: 50%;
  max-width: 300px;
  position: relative;
}

input {
  width: calc(100% - 16px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.suggestions_list {
  position: absolute;
  left: 0;
  right: 2px;
  top: calc(100% + 4px);
  background: white;
  border: 1px solid #ccc;
}

.suggestion_item {
  padding: 8px;
  cursor: pointer;
  font-size: 12px;
  color: gray;
}

.suggestion_item:hover {
  background-color: #f8f8f8;
}

.suggestion_item:active {
  color: black;
}

.suggestion_item:not(:last-child) {
  border-bottom: 1px solid #f7f7f7;
}

button {
  padding: 8px 16px;
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
