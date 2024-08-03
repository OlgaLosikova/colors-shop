<script setup>
import { useCartStore } from "../store/CartStore";

defineProps({
  setVisibilityCart: Function,
});

const cartStore = useCartStore();
</script>

<template>
  <header class="header">
    <img src="../assets/svg/burger.svg" alt="burger-menu" />
    <img src="../assets/svg/logo.svg" alt="logo" />
    <nav>
      <ul class="navigation">
        <li>Продукты</li>
        <li>Цвета</li>
        <li>Вдохновение</li>
        <li>Советы</li>
        <li>Найти магазин</li>
      </ul>
    </nav>
    <div class="header-buttons-wrapper">
      <div class="call-wrapper">
        <p class="phone">+7 (495) 221-77-69</p>
        <span class="call-button">Заказать звонок</span>
      </div>
      <div class="header-icons">
        <img src="../assets/svg/search.svg" alt="search" /><img
          src="../assets/svg/profile.svg"
          alt="profile"
        /><img src="../assets/svg/heart.svg" alt="heart" /><span
          @click="setVisibilityCart"
          class="cart-count"
          >{{ cartStore.quantity }}</span
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: white;
  color: #1f2020;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  height: 104px;
}
.header > img:first-child {
  display: none;
}
.navigation {
  display: flex;
  text-transform: uppercase;
  list-style-type: none;
  gap: 24px;
  font-size: 14px;
  padding-inline-start: 172px;
}
.call-wrapper {
  text-align: start;
  margin-right: 116px;
}
.phone {
  font-weight: 500;
  margin-block-end: -6px;
}
.call-button {
  font-size: 14px;
  opacity: 30%;
}
.header-icons {
  display: flex;
  gap: 24px;
}
.cart-count {
  width: 24px;
  height: 24px;
  background-color: #7bb899;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 23px;
  cursor: pointer;
}
.header-buttons-wrapper {
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 1390px) {
  .navigation {
    padding-inline-start: 30px;
  }
  .call-wrapper {
    margin-right: 30px;
  }
}
@media (max-width: 1125px) {
  .navigation {
    display: none;
  }
  .header > img:first-child {
    display: block;
    margin-right: 24px;
  }
  .header {
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media (max-width: 625px) {
  .call-wrapper {
    display: none;
  }
  .header {
    height: 44px;
    border-bottom: 1px solid #1f20200f;
  }
}
@media (max-width: 450px) {
  .header-icons > img {
    display: none;
  }
  .header {
    justify-content: space-between;
  }
  .header > img:nth-child(2) {
    width: 99px;
  }

  .header-buttons-wrapper {
    margin-left: 0;
  }
}
</style>
