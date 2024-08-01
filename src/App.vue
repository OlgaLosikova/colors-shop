<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import Slider from "./components/Slider/Slider.vue";
import Switch from "./components/Switch.vue";
import Cart from "./components/Cart/Cart.vue";
import Table from "./components/Table/Table.vue";

const baseUrl = "https://568abbd2ee538587.mokky.dev/items";
const products = ref([]);
const isOpen = ref(false);
const isOpenCart = ref(false);
const filters = reactive({
  type: "all",
  sortType: "-price",
  sortTitle: "сначала дорогие",
  categorySearchStr: "",
  categories: [],
});

const fetchProducts = async () => {
  try {
    const params = { sortBy: `${filters.sortType}` };
    filters.categorySearchStr &&
      (params.categories = `*${filters.categorySearchStr}`);

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
  if (e.target.checked && !filters.categories.includes(categoryNumber)) {
    filters.categories.push(categoryNumber);
    filters.categories.sort();
  } else {
    filters.categories = filters.categories.filter(
      (item) => item !== categoryNumber
    );
  }
  filters.categories.length
    ? (filters.categorySearchStr = filters.categories.reduce((acc, item) => {
        return acc + "," + item;
      }))
    : (filters.categorySearchStr = "");
};
const openSort = () => {
  isOpen.value = true;
};
const openCart = () => {
  isOpenCart.value = true;
};
const closeCart = () => {
  isOpenCart.value = false;
};
onMounted(fetchProducts);
watch([filters], fetchProducts);
</script>

<template>
  <Header :openCart="openCart" />
  <main class="main">
    <Slider />
    <div class="main-container">
      <Switch :selectCategory="selectCategory" />
      <Table
        :products="products"
        :changeSort="changeSort"
        :sortTitle="filters.sortTitle"
        :isOpen="isOpen"
        :openSort="openSort"
      />
    </div>
  </main>
  <Cart :isOpenCart="isOpenCart" :closeCart="closeCart" />
</template>

<style scoped>
.main {
  background-color: #fff;
}
.main-container {
  display: flex;
  margin-bottom: 310px;
}
</style>
