<script setup>
import { useCartStore } from "../../store/CartSore";

defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  count: Number,
  id: Number,
});

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-item">
    <img :src="imageUrl" alt="product-img" />
    <div class="product-text">
      <p>{{ title }}</p>
      <p>{{ price }} ₽</p>
    </div>
    <div class="buttons-wrapper">
      <button @click="() => cartStore.decrementProduct(id)">
        <img src="../../assets/svg/minus.svg" alt="minus" /></button
      ><span>{{ count }}</span
      ><button @click="() => cartStore.incrementProduct(id)">
        <img src="../../assets/svg/plus.svg" alt="plus" />
      </button>
    </div>
    <img @click="()=>cartStore.deleteProduct(id)" class="cart-delete" src="../../assets/svg/x.svg" alt="delete-item" />
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-top: 1px solid #0000001a;
  padding: 12px 0;
}
.cart-item > img:first-child {
  width: 96px;
  height: 96px;
  margin-right: 8px;
}
.buttons-wrapper {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.buttons-wrapper > button {
  background-color: #f2f2f2;
  padding: 4px 12px;
}

.buttons-wrapper > button > img {
  width: 16px;
  height: 16px;
}
.buttons-wrapper > span {
  margin: 0 20px;
}
.cart-delete {
  opacity: 20%;
  margin-left: 37px;
  cursor: pointer;
}
.product-text {
  text-align: start;
  flex-basis: 25%;
}
.product-text > p:last-child {
  font-weight: 500;
}
</style>
