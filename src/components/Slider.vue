<script setup></script>

<template>
  <div class="slider">
    <nav>
      <ul>
        <li>Главная</li>
        <li>Продукты</li>
        <li>Краски</li>
      </ul>
    </nav>
    <div class="slider-text">
      <h1>Краски</h1>
      <p >
        Идеально подходят для стен и других поверхностей. Найди свой идеальный
        цвет!
      </p>
    </div>
    <div class="slider-markers">
      <span class="marker"></span><span class="marker"></span
      ><span class="marker"></span><span class="marker"></span
      ><span class="marker"></span><span class="marker"></span>
    </div>
    <img class="chevron-left" src="../assets/svg/chevron-right.svg" alt="chevron-left" />
    <img
      class="chevron-right"
      src="../assets/svg/chevron-right.svg"
      alt="chevron-right"
    />
  </div>
</template>

<style scoped>
.slider {
  background-image: url(../assets/slide.png);
  height: 560px;
  text-align: center;
  position: relative;
}
.slider-text {
  width: 472px;
  margin: 100px auto 0;
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
  padding: 32px 64px;
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
.chevron-right{
  position: absolute;
  bottom: 166px;
  right:420px
}
.chevron-left{
  position: absolute;
  bottom: 166px;
  left:420px;
  transform: rotate(180deg);
  display: none;
}
</style>
