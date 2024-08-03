<template><div class="loader"></div></template>
<style scoped>
.loader {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  animation: l1 1s linear infinite alternate;
  color: #1f2020;
  margin: 100px auto;
}
.loader:before {
  content: "Loading...";
}
@keyframes l1 {
  to {
    opacity: 0;
  }
}
</style>
