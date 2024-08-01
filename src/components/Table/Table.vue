<script setup>
import { ref } from "vue";

import Menu from "../Menu.vue";
import Card from "./Card.vue";

defineProps({
  sortTitle: String,
  products: Array,
  changeSort: Function,
  openSort: Function,
  isOpen: Boolean,
});
</script>

<template>
  <div class="table">
    <div class="table-header">
      <p class="table-title">412 товаров</p>
      <div @click="openSort" class="sort-wrapper">
        <p class="table-title">{{ sortTitle }}</p>
        <img src="../../assets/svg/polygon.svg" alt="polygon" />
      </div>
      <Menu :changeSort="changeSort" :isOpen="isOpen" />
    </div>
    <div v-if="products.length" class="table-body">
      <Card
        v-for="product in products"
        :key="product.id"
        :title="product.product"
        :price="product.price"
        :imageUrl="product.image"
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
</style>
