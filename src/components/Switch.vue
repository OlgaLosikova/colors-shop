<script setup>
import { useFiltersStore } from "../store/FiltersStore";

const filtersStore = useFiltersStore();

defineProps({
  isOpenCategories: Boolean,
  setVisibilityCategories: Function,
});
const categories = [
  { title: "новинки", number: 1 },
  { title: "Есть в наличии", number: 2 },
  { title: "Контрактные", number: 3 },
  { title: "Эксклюзивные", number: 4 },
  { title: "Распродажа", number: 5 },
];
</script>

<template>
  <aside class="categories" :style="isOpenCategories && 'display:flex'">
    <img src="../assets/svg/Rectangle.svg" alt="rectangle" />
    <label
      class="switch"
      v-for="category in categories"
      :key="category.title"
      :category="category"
    >
      <input
        type="checkbox"
        class="switch-input"
        @click.self="(e) => filtersStore.selectCategory(e, category.number)"
      />
      <span
        :style="isOpenCategories && 'display:block'"
        class="switch-slider"
      ></span
      >{{ category.title }}
    </label>
  </aside>
  <div
    v-if="isOpenCategories"
    @click="setVisibilityCategories"
    class="switch-overlay"
  ></div>
</template>

<style scoped>
.switch {
  display: flex;
  position: relative;

  border-radius: 11px;
  color: #1f2020;
  text-align: start;
}
.categories > img {
  display: none;
}
.switch-input {
  width: 0;
  height: 0;
  opacity: 0;
  margin-right: 43px;
}
.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #f2f2f2;
  border-radius: 11px;
  transition: 0.4s;
  width: 36px;
  height: 22px;
}
.switch-slider::before {
  content: "";
  position: absolute;
  cursor: pointer;
  left: 7px;
  top: 7px;
  background-color: #1f2020;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.switch-input:checked + .switch-slider {
  background-color: #7bb899;
}
.switch-input:checked + .switch-slider::before {
  transform: translateX(14px);
}
.categories {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: uppercase;
  margin-top: 72px;
  margin-left: 64px;
  flex-basis: 20%;
}
.switch-overlay {
  display: none;
}
@media (max-width: 625px) {
  .categories {
    display: none;
    z-index: 1001;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: 160px 0 0;
    padding: 0 24px;
    border-radius: 24px 24px 0 0;
    align-items: flex-start;
  }
  .switch-overlay {
    background-color: #000000b3;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1000;
    display: block;
  }
  .categories > img {
    align-self: center;
    display: block;
    margin-bottom: 28px;
    margin-top: 12px;
  }
}
</style>
