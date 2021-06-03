<template>
  <b-carousel :indicator="false">
    <b-carousel-item v-for="(avis, i) in listAvis" :key="i">
      <div class="avis-box">
        <p class="subtitle line-clamp">
          <b-rate :value="avis.note" show-score disabled class="mb-3" />
          {{ avis.text }}
        </p>
        <p class="has-text-right">
          {{ avis.nom }}
        </p>
        <p class="title is-size-6"></p>
      </div>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
import listAvis from '../assets/avis-google.json';

export default {
  name: 'Carousel',
  components: {},
  data: function() {
    return {
      listAvis,
    };
  },
};
</script>

<style>
.avis-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 10rem;
}
.line-clamp {
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
}
</style>
