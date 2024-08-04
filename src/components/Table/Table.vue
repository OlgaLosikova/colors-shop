<script setup>
import { useFiltersStore } from "../../store/FiltersStore";
import { useProductStore } from "../../store/ProductsStore";

const filtersStore = useFiltersStore();
const productStore = useProductStore();

import Menu from "../Menu.vue";
import Card from "./Card.vue";


defineProps({
  setVisibilityCategories: Function,
  isSmallWidth:Boolean,
});

</script>

<template>
  <div class="table">
    <div class="table-header">
      <p class="table-title">{{ productStore.products.length }} товаров</p>
      <span @click="setVisibilityCategories" class="filter-button"
        >фильтры</span
      >
      <div @click="filtersStore.isOpenSort=true" class="sort-wrapper">
        <p class="table-title">{{ filtersStore.sortTitle }}</p>
        <img src="../../assets/svg/polygon.svg" alt="polygon" />
      </div>
      <Menu  />
    </div>
    <div v-if="productStore.products.length" class="table-body">
      <Card
        v-for="product in productStore.products"
        :key="product.id"
        :id="product.id"
        :title="product.product"
        :price="product.price"
        :imageUrl="product.image"
        :categories="product.categories"
        :isSmallWidth="isSmallWidth"
      />
    </div>

    <div class="table-empty" v-else>
      <h2>Нет ни одного товара</h2>
      <p>Попробуйте сбросить или изменить параметры фильтрации</p>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin-top: 60px;
  margin-right: 64px;
  width: 80%;
}
.table-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 16px;
}
.table-empty {
  color: #1f2020;
  margin: 200px auto;
}
.table-empty > h2 {
  font-weight: 400;
  text-transform: uppercase;
}
.table-title {
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #1f2020;
}
.table-header {
  display: flex;
  justify-content: space-between;
}
.sort-wrapper {
  display: flex;
  gap: 4px;
  position: relative;
  cursor: pointer;
}
.filter-button {
  display: none;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #1f2020;
  line-height: 42px;
  cursor: pointer;
}
@media (max-width: 625px) {
  .table {
    margin-top: 89px;
    margin-right: 24px;
    margin-left: 24px;
    width: 100%;
  }
  .filter-button {
    display: block;
  }
  .table-header > p:first-child {
    display: none;
  }
  .table-body {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
