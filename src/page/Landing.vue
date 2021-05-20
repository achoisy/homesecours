<template>
  <div class="landing" style="height: 100%">
    <Navbar />
    <UrgentAction :class="{ 'pt-5': $screen.breakpoint == 'mobile' }" />
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
  data: function() {
    return {
      stickNavbar: false,
      isRgpdModalActive: false,
      offres: [
        {
          id: 1,
          title: 'SERRURERIE',
          text:
            'Changement de cylindre, retrait de clé cassé, ouverture de porte, pose de serrure...',
          color: '',
          action: {
            label: 'à partir de 25€',
          },
          backgroundImage: 'serrurerie.jpg',
        },
        {
          id: 2,
          title: 'PLOMBERIE',
          text:
            'Recherche de fuite, débouchage canalisation, fuite WC, pose de mitigeur standard, robinet, chauffe-eau électrique...',
          color: '',
          action: {
            label: 'à partir de 25€',
          },
          backgroundImage: 'plomberie.jpg',
        },
        {
          id: 3,
          title: 'ELECTRICITE',
          text:
            "Recherche de panne, changement d'empoule, pose de réglette, prise de courant, interrupteur...",
          color: '',
          action: {
            label: 'à partir de 45€',
          },
          backgroundImage: 'electricite.jpg',
        },
        {
          id: 4,
          title: 'PEINTURE',
          text:
            'Pour tous vos travaux de lessivage, peinture intérieur et extérieur, enduisage...',
          color: '',
          action: {
            label: 'demander un devis',
          },
          backgroundImage: 'peinture.jpg',
        },
        {
          id: 5,
          title: 'MENUISERIE BOIS/ALU',
          text:
            'Pose de porte, séparation placo, plan de travail, assemblage de meuble...',
          color: '',
          action: {
            label: 'demander un devis',
          },
          backgroundImage: 'menuiserie.jpg',
        },
        {
          id: 6,
          title: 'RENOVATION',
          text:
            'Pose de carrelage et faience, renovation de cuisine, salle de bain, réseaux électrique et eau...',
          color: '',
          action: {
            label: 'demander un devis',
          },
          backgroundImage: 'renovation.jpg',
        },
      ],
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
