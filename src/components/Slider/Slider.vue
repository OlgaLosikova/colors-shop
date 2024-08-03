<script setup>
import { ref } from "vue";

import SliderItem from "./SliderItem.vue";

const count = ref(1);

const slides = [
  { id: 1, img: "/src/assets/slider-images/slide1.png" },
  { id: 2, img: "/src/assets/slider-images/slide2.jpg" },
  { id: 3, img: "/src/assets/slider-images/slide3.jpg" },
  { id: 4, img: "/src/assets/slider-images/slide1.png" },
  { id: 5, img: "/src/assets/slider-images/slide2.jpg" },
  { id: 6, img: "/src/assets/slider-images/slide3.jpg" },
];
const nextSlide = () => {
  count.value++;
  if (count.value === 7) {
    count.value = 1;
  }
};
const prevSlide = () => {
  count.value--;
  if (count.value === 0) {
    count.value = 6;
  }
};
setInterval(nextSlide, 5000);
</script>

<template>
  <div class="slider">
    <SliderItem
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.img"
      :count="count"
      :id="slide.id"
    />
    <nav>
      <ul>
        <li>Главная</li>
        <li>Продукты</li>
        <li>Краски</li>
      </ul>
    </nav>
    <div class="slider-text">
      <h1>Краски</h1>
      <p>
        Идеально подходят для стен и других поверхностей. Найди свой идеальный
        цвет!
      </p>
    </div>
    <div class="slider-markers">
      <span
        v-for="slide in slides"
        :key="slide.id"
        :class="count === slide.id ? 'marker selected' : 'marker'"
      ></span>
    </div>
    <img
      @click="prevSlide"
      v-if="count > 1"
      class="chevron-left"
      src="../../assets/svg/chevron-right.svg"
      alt="chevron-left"
    />
    <img
      @click="nextSlide"
      v-if="count < 6"
      class="chevron-right"
      src="../../assets/svg/chevron-right.svg"
      alt="chevron-right"
    />
  </div>
</template>

<style scoped>
.slider {
  height: 560px;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
}
.slider-text {
  position: absolute;
  top: 0;
  width: 472px;
  height: 129px;
  margin: 170px auto;
  left: 0;
  right: 0;
}
ul {
  text-transform: uppercase;
  font-size: 10px;
  display: flex;
  margin-block-start: 0;
  gap: 24px;
  padding-inline-start: 0;
  opacity: 30%;
}
li:first-child {
  list-style-type: none;
}
nav {
  position: absolute;
  padding: 32px 64px;
  top: 0;
}
.slider-markers {
  width: 124px;
  height: 32px;
  display: flex;
  background: #00000066;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  position: absolute;
  bottom: 39px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.marker {
  width: 6px;
  height: 6px;
  background-color: #ffffff33;
  border-radius: 3px;
}
.selected {
  background-color: #fff;
}
.chevron-right {
  position: absolute;
  bottom: 166px;
  right: 420px;
  cursor: pointer;
}
.chevron-left {
  cursor: pointer;
  position: absolute;
  bottom: 166px;
  left: 420px;
  transform: rotate(180deg);
}
@media (max-width: 1070px) {
  .chevron-right {
    right: 30px;
  }
  .chevron-left {
    left: 30px;
  }
}
@media (max-width: 625px) {
  .slider {
    height: 42px;
    text-align: left;
    overflow: visible;
  }
  .slider > *:not(nav, .slider-text) {
    display: none;
  }
  .slider-text > p {
    display: none;
  }
  ul {
    color: #1e1f1f4d;
  }
  nav {
    padding: 16px 24px;
  }
  h1 {
    font-size: 36px;
    color: #1f2020;
    margin-block-start: 0;
  }
  .slider-text {
    width: auto;
    height: auto;
    position: static;
    margin: 74px 24px 0;
  }
}
</style>
