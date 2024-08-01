<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store/CartSore";

defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  id: Number,
});
const isMouseOver = ref(false);
const cartStore = useCartStore();

const addProduct = (obj) => {
  cartStore.addToCart(obj);

};
</script>

<template>
  <div
    class="card"
    @mouseover="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <img :src="imageUrl" alt="product-img" />
    <p>{{ title }}</p>
    <div class="card-footer">
      <p class="card-price">{{ price }} ₽</p>
      <button
        v-if="isMouseOver"
        @click="() => addProduct({ title, price, id, imageUrl })"
        class="add-button"
      >
        <img src="../../assets/svg/plus.svg" alt="plus" />
      </button>
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
  text-align: start;
}
.add-button {
  width: 80px;
  height: 32px;
  padding: 5px 30px;
}
.card-price {
  font-weight: 600;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
