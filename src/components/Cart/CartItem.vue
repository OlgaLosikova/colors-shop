<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
});
</script>

<template>
  <div class="cart-item">
    <img :src="imageUrl" alt="prduct-img" />
    <div>
      <p>{{ title }}</p>
      <p>{{ price }}</p>
    </div>
    <div class="buttons-wrapper">
      <button ><img src="../../assets/svg/minus.svg" alt="minus" /></button
      ><span>2</span
      ><button><img src="../../assets/svg/plus.svg" alt="plus" /></button>
    </div>
    <img class="cart-delete" src="../../assets/svg/x.svg" alt="delete-item" />
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #0000001a;
  padding: 12px 0;
}
.buttons-wrapper{
    display: flex;
align-items: center;

}
.buttons-wrapper>button{
background-color: #f2f2f2;
padding: 4px 12px;
}

.buttons-wrapper>button>img{
width: 16px;
height: 16px;

}
.buttons-wrapper>span{
margin: 0 20px;
}
.cart-delete{
    opacity: 20%;
}
</style>
