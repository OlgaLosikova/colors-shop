<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "./store/ProductsStore";

import { useResizeObserver } from "@vueuse/core";

import Header from "./components/Header.vue";
import Slider from "./components/Slider/Slider.vue";
import Switch from "./components/Switch.vue";
import Cart from "./components/Cart/Cart.vue";
import Table from "./components/Table/Table.vue";
import Loader from "./components/Loader.vue";
import Error from "./components/Error.vue";

const productStore = useProductStore();

const main = ref(null);

const isOpenCart = ref(false);
const isOpenCategories = ref(false);
const isSmallWidth = ref(false);

useResizeObserver(main, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  if (width <= 625) isSmallWidth.value = true;
  else isSmallWidth.value = false;
  if (width > 625) isOpenCategories.value = false;
});

const setVisibilityCategories = () => {
  isOpenCategories.value === false
    ? (isOpenCategories.value = true)
    : (isOpenCategories.value = false);
};
const setVisibilityCart = () => {
  isOpenCart.value === false
    ? (isOpenCart.value = true)
    : (isOpenCart.value = false);
};
onMounted(() => productStore.fetchProducts());
</script>

<template>
  <Header :setVisibilityCart="setVisibilityCart" />
  <main class="main">
    <Slider />
    <div class="main-container" ref="main">
      <Switch
        v-if="productStore.status === 'success'"
        :isOpenCategories="isOpenCategories"
        :setVisibilityCategories="setVisibilityCategories"
      /><Loader v-if="productStore.status === 'loading'" />
      <Table
        v-else-if="productStore.status === 'success'"
        :setVisibilityCategories="setVisibilityCategories"
        :isSmallWidth="isSmallWidth"
      />
      <Error v-else />
    </div>
  </main>
  <Cart :isOpenCart="isOpenCart" :setVisibilityCart="setVisibilityCart" />
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
