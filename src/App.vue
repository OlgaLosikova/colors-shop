<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import Slider from "./components/Slider/Slider.vue";
import Card from "./components/Card.vue";
import Switch from "./components/Switch.vue";
import Menu from "./components/Menu.vue";
const baseUrl = "https://568abbd2ee538587.mokky.dev/items";
const products = ref([]);
const isOpen = ref(false);
const filters = reactive({
  type: "all",
  sortType: "-price",
  sortTitle: "сначала дорогие",
  category: "",
});
const fetchProducts = async () => {
  try {
    const params = { sortBy: `${filters.sortType}` };
    filters.category && (params.categories = `*${filters.category}`);

    const { data } = await axios.get(baseUrl, { params });
    products.value = data;
  } catch (err) {
    console.log(err);
  }
};
const changeSort = (title, type) => {
  isOpen.value = false;
  filters.sortTitle = title;
  filters.sortType = type;
};
const selectCategory = (e, categoryNumber) => {
  if (e.target.checked) {
    if (filters.category.length >= 1 && filters.category.length < 9) {
      filters.category += ",";
    }
    if (!filters.category.includes(categoryNumber)) {
      filters.category += categoryNumber;
    }
  } 

  console.log(e.target.checked, filters.category);
};
const openSort = () => {
  isOpen.value = true;
};
onMounted(fetchProducts);
watch([filters], fetchProducts);
</script>

<template>
  <Header />
  <main class="main">
    <Slider />
    <div class="main-container">
      <aside class="categories">
        <Switch :selectCategory="selectCategory" />
      </aside>
      <div class="table">
        <div class="table-header">
          <p class="table-title">412 товаров</p>
          <div @click="openSort" class="sort-wrapper">
            <p class="table-title">{{ filters.sortTitle }}</p>
            <img src="./assets/svg/polygon.svg" alt="polygon" />
          </div>
          <Menu :changeSort="changeSort" :isOpen="isOpen" />
        </div>
        <div class="table-body">
          <Card
            v-for="product in products"
            :key="product.id"
            :title="product.product"
            :price="product.price"
            :imageUrl="product.image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: #fff;
}
.main-container {
  display: flex;
  margin-bottom: 310px;
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
.categories {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: uppercase;
  margin-top: 72px;
  margin-left: 64px;
  flex-basis: 20%;
}
.sort-wrapper {
  display: flex;
  gap: 4px;
  position: relative;
  cursor: pointer;
}
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
</style>
