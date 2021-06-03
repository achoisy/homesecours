<template>
  <div class="tile is-parent" :class="size">
    <article class="tile is-child is-success px-0">
      <div class="content">
        <p class="title">Nos avis sur Google</p>
        <div class="content">
          <Carousel />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Carousel from './Carousel';

export default {
  name: 'AvisClient',
  props: {
    size: String,
  },
  components: {
    Carousel,
  },
};
</script>

<style></style>
