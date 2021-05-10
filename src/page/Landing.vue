<template>
  <div class="grid">
    <img id="logo" src="/assets/img/square-logo.png" />
    <Carousel />
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
export default {
  name: 'Landing',
  components: {
    Carousel,
  },
};
</script>

<style>
#logo {
  max-width: 80%;
}
.grid .v-expand {
  height: 90vh;
}
</style>
