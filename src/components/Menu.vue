<script setup>
import { useFiltersStore } from "../store/FiltersStore";

const filtersStore = useFiltersStore();

const sort = [
  { title: "Сначала дорогие", type: "-price" },
  { title: "Сначала недорогие", type: "price" },
  { title: "Сначала популярные", type: "-popularity" },
  { title: "Сначала новые", type: "-date" },
];
</script>

<template>
  <div v-if="filtersStore.isOpenSort" class="menu">
    <p
      v-for="item in sort"
      :key="item.title"
      class="menu-item"
      @click="() => filtersStore.changeSort(item.title, item.type)"
    >
      {{ item.title }}
    </p>
  </div>
  <div v-if="filtersStore.isOpenSort" class="menu-overlay"></div>
</template>

<style scoped>
.menu-overlay {
  background-color: #000000b3;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1000;
}
.menu {
  position: absolute;
  color: #1f2020;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #fff;
  width: 280px;
  text-align: start;
  right: 64px;
  z-index: 1010;
}
.menu-item {
  padding-left: 24px;
  margin-block-end: 0;
  margin-block-start: 0;
  height: 48px;
  line-height: 48px;
  cursor: pointer;
}
.menu-item:hover {
  background-color: #7bb899;
}
@media (max-width: 625px) {
  .menu {
    right: 0;
  }
}
</style>
