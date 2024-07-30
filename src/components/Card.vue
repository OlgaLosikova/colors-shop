<script setup></script>

<template>
  <div class="card">
    <img src="../assets/Border.png" alt="product-img" />
    <p>Краска Wallquest, Brownsone MS90102</p>
    <div class="card-footer">
      <p class="card-price">6000 ₽</p>
      <button class="add-button"><img  src="../assets/svg/plus.svg" alt="plus" /></button>
    </div>
  </div>
</template>

<style scoped>
.card {
  color: #1f2020;
  display: inline-block;
  flex-direction: column;
  align-items: center;
}
.add-button {
  width: 80px;
  height: 32px;
  display: none;
}
.card-price {
  font-weight: 600;
}
.card-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
