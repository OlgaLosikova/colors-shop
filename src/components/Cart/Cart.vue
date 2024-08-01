<script setup>
import { useCartStore } from "../../store/CartSore";

defineProps({
  isOpenCart: Boolean,
  closeCart: Function,
});

import CartItem from "./CartItem.vue";

const cartStore = useCartStore();
console.log(cartStore.addedItems);
</script>

<template>
  <div v-if="isOpenCart" class="cart-overlay">
    <div class="cart">
      <header>
        <h2>Корзина</h2>
        <span @click="closeCart" class="close-img"
          ><img src="../../assets/svg/x.svg" alt="close"
        /></span>
      </header>
      <main>
        <div v-if="cartStore.addedItems.length" class="table">
          <div class="table-header">
            <span>4 товара</span><span>очистить список</span>
          </div>
          <div class="table-body">
            <CartItem
              v-for="item in cartStore.addedItems"
              :key="item.id"
              :title="item.title"
              :imageUrl="item.imageUrl"
              :price="item.price"
            />
          </div>
        </div>
        <div class="table-empty" v-else>
          <h3>Здесь пусто</h3>
          <span>😩</span>
          <p>Вернитесь на главную и добавьте товар в корзину</p>
        </div>
      </main>
      <footer v-if="cartStore.addedItems.length">
        <div class="cart-result">
          <span>Итого</span>
          <p>14 400₽</p>
        </div>
        <button>оформить заказ</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.cart-overlay {
  background-color: #000000b3;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
}
.cart {
  background-color: #fff;
  color: #1f2020;
  position: absolute;
  height: 100%;
  right: 0;
  width: 600px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
}
.close-img {
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid #0000001a;
  border-radius: 24px;
  cursor: pointer;
}
.close-img > img {
  padding: 12px;
}
h2 {
  font-weight: 500;
  font-size: 30px;
  margin-block-end: 0;
  margin-block-start: 0;
}
footer {
  width: 600px;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
  bottom: 0;
}
.cart-result {
  text-align: start;
}
.cart-result > p {
  font-size: 30px;
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 500;
}
.table-header {
  width: 600px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px 10px;
}
.table-header > span:last-child {
  font-size: 14px;
  color: #1e1f1f66;
}
.table-body {
  width: 600px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-direction: column;
  height: calc(100vh - 313px);
  overflow-y: scroll;
}
.table-empty {
  color: #1f2020;
  margin: 200px auto;
}
.table-empty > h3 {
  font-weight: 500;
}
.table-empty > span {
  font-size: 70px;
}
</style>
