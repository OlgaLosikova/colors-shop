<script setup>
defineProps({
imageUrl:String,
title:String,
price:Number,
})
</script>

<template>
  <div class="card">
    <img :src="imageUrl" alt="product-img" />
    <p>{{ title }}</p>
    <div class="card-footer">
      <p class="card-price">{{ price }} ₽</p>
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
  padding: 0;
  border-bottom: 1px solid #0000001a;
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
