<template>
  <div class="landing" style="height: 100%">
    <Navbar @menu="updateActiveMenu" />
    <UrgentAction
      :class="{ 'pt-5': $screen.breakpoint == 'mobile' }"
      @menu="updateActiveMenu"
    />
    <section
      class="section has-background-white-bis"
      :class="{ 'px-4': $screen.breakpoint == 'mobile' }"
    >
      <div class="tile is-ancestor is-flex-wrap-wrap">
        <CarteOffre
          v-for="(offre, index) in sOffres"
          :offre="offre"
          :key="index"
          :size="getSize"
        />
        <GoogleMap :size="getSize" />
        <AvisClient />
      </div>
    </section>
    <Footer />
    <b-modal
      v-model="isRgpdModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="RGPD Modal"
      aria-modal
    >
      <RgpdModal />
    </b-modal>
  </div>
</template>

<script>
import { shuffle } from 'lodash';
import productList from '../assets/product-list.json';
import Carousel from '../components/Carousel';
import RgpdModal from '../components/RGPD-validation-form';
import UrgentAction from '../components/MainHero';
import AvisClient from '../components/AvisClient';
import CarteOffre from '../components/OfferTiles';
import GoogleMap from '../components/GoogleMap';
import Menu from '../components/Menu';
import Observer from '../components/IntersectionObserver';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
  name: 'Landing',
  components: {
    Carousel,
    RgpdModal,
    UrgentAction,
    AvisClient,
    CarteOffre,
    GoogleMap,
    Menu,
    Observer,
    Navbar,
    Footer,
  },
  mounted() {
    this.$on('menu', function(name) {
      console.log('name :', name);
    });
  },
  data: function() {
    return {
      stickNavbar: false,
      isRgpdModalActive: false,
      offres: productList,
      activeMenu: 'accueil',
    };
  },
  computed: {
    sOffres: function() {
      return shuffle(this.offres);
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
  methods: {
    onIntersectionElement: function(value) {
      this.stickNavbar = !value;
      console.log(this.stickNavbar);
    },
    updateActiveMenu: function(name) {
      console.log('name: ', name);
      this.activeMenu = name;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/responsive';

.is-small-caps {
  font-variant: small-caps;
}
.short + .section {
  padding-top: 6rem;
}
</style>
