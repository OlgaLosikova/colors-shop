<script setup>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Card from "./components/Card.vue";
import Switch from "./components/Switch.vue";

const categories = [
  "новинки",
  "Есть в наличии",
  "Контрактные",
  "Эксклюзивные",
  "Распродажа",
];
</script>

<template>
  <Header />
  <main class="main">
    <Slider />
    <div class="main-container">
      <aside class="categories">
        <Switch
          v-for="category in categories"
          :key="category"
          :category="category"
        />
     
      </aside>
      <div class="table">
      <div class="table-header">
        <p class="table-title">412 товаров</p>
        <div>
          <p class="table-title">сначала дорогие</p>
          <img src="./assets/svg/polygon.svg" alt="polygon" />
        </div>
      </div>
      <Card /></div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: #fff;
  
}
.main-container{
  display: flex;

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
</style>
