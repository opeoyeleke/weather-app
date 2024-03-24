<template>
  <div class="switch">
    <button
      :class="{ active: activeTab === day.value }"
      @click="switchTo(day.value)"
      v-for="day in days"
      :key="day.value"
    >
      {{ day.name }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: String,
  },
  data() {
    return {
      activeTab: this.value,
      days: [
        { name: "Today", value: "today" },
        { name: "Next 7 Days", value: "next7days" },
        { name: "Last 5 Days", value: "last5days" },
      ],
    };
  },
  methods: {
    switchTo(tab) {
      if (tab !== this.activeTab) {
        this.activeTab = tab;
        this.$emit("update:value", tab);
      }
    },
  },
  watch: {
    value(newValue) {
      this.activeTab = newValue;
    },
  },
};
</script>

<style>
.switch {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.switch button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}

.switch button:first-child {
  border-radius: 4px 0 0 4px;
}

.switch button:last-child {
  border-radius: 0 4px 4px 0;
}

.switch button:hover {
  background-color: #e0e0e0;
}

.switch button.active {
  background-color: rgb(86, 149, 172);
  color: #fff;
}
</style>
