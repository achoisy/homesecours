<template>
  <div class="landing" style="height: 100%">
    <UrgentAction />
    <section class="section has-background-white-bis">
      <div class="tile is-ancestor is-flex-wrap-wrap">
        <CarteOffre
          v-for="(offre, index2) in offres"
          :offre="offre"
          :key="index2"
          :size="getSize"
        />
        <GoogleMap :size="getSize" />
        <AvisClient />
      </div>
      <div class="tile is-ancestor is-flex-wrap-wrap"></div>
    </section>

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
import Carousel from '../components/Carousel';
import RgpdModal from '../components/RGPD-validation-form';
import UrgentAction from '../components/MainHero';
import AvisClient from '../components/AvisClient';
import CarteOffre from '../components/OfferTiles';
import GoogleMap from '../components/GoogleMap';
import Menu from '../components/Menu';
import Observer from '../components/IntersectionObserver';

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
  },
  data: function() {
    return {
      stickNavbar: false,
      isRgpdModalActive: false,
      offres: [
        {
          id: 1,
          title: 'SERRURERIE',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'serrurerie.jpg',
        },
        {
          id: 2,
          title: 'PLOMBERIE',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'plomberie.jpg',
        },
        {
          id: 3,
          title: 'ELECTRICITE',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'electricite.jpg',
        },
        {
          id: 4,
          title: 'PEINTURE',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'peinture.jpg',
        },
        {
          id: 5,
          title: 'MENUISERIE BOIS/ALU',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'menuiserie.jpg',
        },
        {
          id: 6,
          title: 'RENOVATION',
          text: 'ceci est le texte',
          color: '',
          backgroundImage: 'renovation.jpg',
        },
      ],
    };
  },
  computed: {
    sOffres: function() {
      switch (this.$screen.breakpoint) {
        case 'mobile': // 2
          return this.createOffreList(1);
        case 'tablet': // 2
          return this.createOffreList(2);
        case 'desktop': // 3
          return this.createOffreList(3);
        default:
          // 4
          return this.createOffreList(4);
      }
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
    confirm() {
      this.$buefy;
    },
    createOffreList(nbColumns) {
      let offreList = [];
      shuffle(this.offres).forEach((offre) => {
        if (offreList.length <= 0) {
          offreList.push([offre]);
        } else if (offreList[offreList.length - 1].length < nbColumns) {
          offreList[offreList.length - 1].push(offre);
        } else {
          offreList.push([offre]);
        }
      });
      return offreList;
    },
    onIntersectionElement: function(value) {
      this.stickNavbar = !value;
      console.log(this.stickNavbar);
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
