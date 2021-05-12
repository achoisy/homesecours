<template>
  <div class="landing" style="height: 100%">
    <UrgentAction />
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child is-success px-0">
            <div class="content">
              <p class="title">Avis clients</p>
              <div class="content">
                <Carousel />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <div class="columns ">
      <div class="column is-half is-offset-one-quarter">
        <p class="has-text-weight-medium">
          Un vrai savoir faire en serrurerie, plomberie, électricité,
          rénovation, menuiserie, pose de cuisine...
        </p>
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
import UrgentAction from '../components/UrgentAction';

export default {
  name: 'Landing',
  components: {
    Carousel,
    RgpdModal,
    UrgentAction,
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

<style lang="scss">
@import '../styles/colors';
@import '../styles/responsive';

.logo1 {
  padding: 0.5rem;
  height: auto;
}
.is-small-caps {
  font-variant: small-caps;
}
.logo1 img {
  max-width: 300px;
}
</style>
