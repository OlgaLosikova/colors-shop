<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store/CartStore";


defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  id: Number,
  isSmallWidth: Boolean,
  categories: Array,
});
const cartStore = useCartStore();

const isMouseOver = ref(false);

</script>

<template>
  <div
    class="card"
    @mouseover="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <img :src="'/src/assets/'+imageUrl" alt="product-img" />
    <p>{{ title }}</p>
    <div class="card-footer">
      <p class="card-price">{{ price }} ₽</p>
      <button
        v-if="isSmallWidth || isMouseOver"
        @click="
          () => cartStore.addToCart({ title, price, id, imageUrl, categories })
        "
        class="add-button"
      >
        <img src="/src/assets/svg/plus.svg" alt="plus" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  color: #1f2020;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid #0000001a;
  text-align: start;
  justify-content: space-between;
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
  width: 100%;
}
@media (max-width: 625px) {
  .card > img {
    width: 156px;
  }
  .add-button {
    background-color: #f2f2f2;
    padding: 0;
    width: 40px;
    height: 24px;
  }
  .add-button > img {
    width: 16px;
    height: 16px;
  }
}
</style>
