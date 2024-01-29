<template>
  <div id="app">
    <ProductDisplay />
  </div>
</template>

<script>
import ProductDisplay from "./components/ProductDisplay.vue";
import "./assets/style/page.css";

export default {
  name: "App",
  components: {
    ProductDisplay,
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100vw;
  min-height: 100vh;
}
</style>
