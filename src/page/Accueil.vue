<template>
  <div class="tile is-ancestor ">
    <CarteOffre
      v-for="(offre, index) in sOffres"
      :offre="offre"
      :key="index"
      :size="getSize"
    />
  </div>
</template>

<script>
// import { shuffle } from 'lodash';
import CarteOffre from '../components/OfferTiles';
import productList from '../assets/product-list.json';

export default {
  name: 'Accueil',
  components: {
    CarteOffre,
  },
  data: function() {
    return {
      offres: productList,
    };
  },
  computed: {
    sOffres: function() {
      return this.offres;
    },
    getSize: function() {
      switch (this.$screen.breakpoint) {
        case 'mobile': // 2
          return 'is-12';
        case 'tablet': // 2
          return 'is-6';
        case 'desktop': // 3
          return 'is-4';
        default:
          // 4
          return 'is-3';
      }
    },
  },
};
</script>

<style></style>
