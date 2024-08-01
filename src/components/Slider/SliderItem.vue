<script setup>
defineProps({
  image: String,
  count: Number,
  id: Number,
});
</script>

<template>
  <div class="img-container" :style="id===1&&`margin-left:${-(count -1)*100}%`">
    <img  :src="image" alt="slide" />
  </div>
</template>

<style scoped>
.img-container{
  width:100%;
  transition: all ease 0.5s;
}
</style>
