<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "./store/ProductsStore";

import Header from "./components/Header.vue";
import Slider from "./components/Slider/Slider.vue";
import Switch from "./components/Switch.vue";
import Cart from "./components/Cart/Cart.vue";
import Table from "./components/Table/Table.vue";
import Loader from "./components/Loader.vue";
import Error from "./components/Error.vue";

const productStore = useProductStore();

const isOpenCart = ref(false);
const isOpenCategories = ref(false);

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
    <div class="main-container">
      <Switch
        v-if="productStore.status === 'success'"
        :isOpenCategories="isOpenCategories"
        :setVisibilityCategories="setVisibilityCategories"
      /><Loader v-if="productStore.status === 'loading'" />
      <Table
        v-else-if="productStore.status === 'success'"
        :products="productStore.products"
        :setVisibilityCategories="setVisibilityCategories"
      />
      <Error v-else/>
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
