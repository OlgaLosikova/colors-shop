<script setup>
const categories = [
  "новинки",
  "Есть в наличии",
  "Контрактные",
  "Эксклюзивные",
  "Распродажа",
];
</script>

<template>
  <label class="switch"  v-for="category in categories"
          :key="category"
          :category="category">
      <input type="checkbox" class="switch-input" />
    <span class="switch-slider"></span>{{ category }}
  </label>
</template>

<style scoped>
.switch {
  display: flex;
  position: relative;

  border-radius: 11px;
  color: #1f2020;
  text-align: start;

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
</style>
