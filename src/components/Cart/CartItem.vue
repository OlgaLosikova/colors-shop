<script setup>
import { useCartStore } from "../../store/CartStore";

defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  count: Number,
  id: Number,
  isInStock: Boolean,
});

const cartStore = useCartStore();
</script>

<template>
  <div :class="isInStock ? 'cart-item ' : 'cart-item absent'">
    <img :src="imageUrl" alt="product-img" />
    <div class="product-text">
      <p>{{ title }}</p>
      <p>{{ price }} ₽</p>
    </div>
    <div class="buttons-wrapper">
      <button
        :disabled="!isInStock"
        @click="() => cartStore.decrementProduct(id)"
      >
        <img src="../../assets/svg/minus.svg" alt="minus" /></button
      ><span>{{ count }}</span
      ><button
        :disabled="!isInStock"
        @click="() => cartStore.incrementProduct(id)"
      >
        <img src="../../assets/svg/plus.svg" alt="plus" />
      </button>
    </div>
    <img
      v-if="isInStock"
      @click="() => cartStore.deleteProduct(id)"
      class="cart-delete"
      src="../../assets/svg/x.svg"
      alt="delete-item"
    /><img
      v-else
      class="cart-delete cart-repeat"
      src="../../assets/svg/repeat.svg"
      alt="repeat"
    />
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
  margin-left: 30px;
  cursor: pointer;
}
.cart-repeat{
  opacity: 100%;

}
.product-text {
  text-align: start;
  flex-basis: 25%;
}
.product-text > p:last-child {
  font-weight: 500;
}
.absent>*:not(img:last-child) {
  opacity: 20%;
}
@media (max-width: 625px) {
  .cart-item {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
  }
  .product-text {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: center;
  }
  .cart-delete {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 3;
    justify-self: end;
  }
  .buttons-wrapper {
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .cart-item > img:first-child {
    justify-self: center;
  }
}
</style>
