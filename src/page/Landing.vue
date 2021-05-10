<template>
  <div
    class="is-flex is-flex-direction-column is-flex-wrap-nowrap is-justify-content-center"
    style="height: 100%"
  >
    <figure class="image is-align-self-center">
      <img src="/assets/img/square-logo.png" />
    </figure>
    <Carousel class="is-align-self-center" />
    <div class="columns ">
      <div class="column is-half is-offset-one-quarter">
        <button
          class="button is-large is-fullwidth is-small-caps is-primary"
          @click="isRgpdModalActive = true"
        >
          Commencons...
        </button>
      </div>
      <div class="column is-half is-offset-one-quarter">
        <button class="button is-text is-fullwidth">
          Regle d’utilisation des données et CGU
        </button>
      </div>
    </div>
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
import Carousel from '../components/Carousel';
import RgpdModal from '../components/RGPD-validation-form';

export default {
  name: 'Landing',
  components: {
    Carousel,
    RgpdModal,
  },
  data: function() {
    return {
      isRgpdModalActive: false,
    };
  },
  methods: {
    confirm() {
      this.$buefy;
    },
  },
};
</script>

<style>
.image {
  max-width: 40rem;
}
.is-small-caps {
  font-variant: small-caps;
}
</style>
