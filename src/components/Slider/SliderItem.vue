<script setup>
defineProps({
  image: String,
  count:Number,
  id:Number,
});
</script>

<template>
  <div class="image-container">
    <img v-if="count===id" class="slider-image" :src="image" alt="slide" />
  </div>
</template>

<style scoped>

</style>
