<template>
  <div class="landing" style="height: 100%">
    <Navbar />
    <UrgentAction :class="{ 'pt-5': $screen.breakpoint == 'mobile' }" />
    <section
      class="section has-background-white-bis is-flex is-justify-content-center"
      :class="{ 'px-4': $screen.breakpoint == 'mobile' }"
    >
      <Transition class="is-flex-wrap-wrap" />
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
import RgpdModal from '../components/RGPD-validation-form';
import UrgentAction from '../components/MainHero';
import GoogleMap from '../components/GoogleMap';
import Observer from '../components/IntersectionObserver';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Transition from './Transition';

export default {
  name: 'Landing',
  components: {
    RgpdModal,
    UrgentAction,
    Observer,
    Navbar,
    Footer,
    Transition,
  },
  data: function() {
    return {
      stickNavbar: false,
      isRgpdModalActive: false,
      transionName: 'move-left',
    };
  },
  watch: {
    $route(to, from) {
      console.log('from index: ', from.meta.index);
      console.log('to index: ', to.meta.index);
      this.transionName =
        from.meta.index > to.meta.index ? 'move-right' : 'move-left';
    },
  },
  computed: {},
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
.section {
  min-height: 100vh;
}
</style>
