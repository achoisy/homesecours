<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns ">
          <div class="column is-8-tablet is-offset-2-tablet">
            <div
              class="is-flex is-flex-direction-column is-justify-content-space-around"
              :class="$screen.breakpoint != 'mobile' ? 'box box-height' : ''"
            >
              <p class="title-500">
                Une urgence ? Un problème de sérrure, de plomberie ou encore
                electrique qui nécessite une
                <span class="font-900">intervention urgente</span> ?
              </p>
              <b-button
                class="button is-fullwidth is-danger add-shadow is-extra-height is-small-caps"
                size="is-large"
                label="intervention urgente"
                icon-right="clock-fast"
              >
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UrgentAction',
};
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/responsive';

.landing .hero {
  background-color: $cyan;
  // background-image: url('/assets/img/mask/side-mask-box.svg');
  // background-position: right top;
  color: $white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.landing .hero .container {
  max-width: 900px;
}

.add-shadow {
  filter: drop-shadow(5px 5px 6px rgba($red, 0.5));
}

.title-500 {
  text-align: justify;
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  white-space: pre-wrap;
}

.font-900 {
  font-family: MuseoSansRounded-900;
}

.is-extra-height {
  height: 4rem;
}
@media screen and (min-width: $tablet) {
  .landing .hero {
    color: $black-ter;
  }
  .title-500 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.4;
  }
}

@media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {
  .landing .hero {
    background-image: url('/assets/img/background-tablet.jpg');
  }
}
@media screen and (min-width: $desktop) and (max-width: $widescreen - 1px) {
  .landing .hero {
    background-image: url('/assets/img/background-desktop.jpg');
  }
}
@media screen and (min-width: $widescreen) and (max-width: 1600px) {
  .landing .hero {
    background-image: url('/assets/img/background-desktop.jpg');
  }
}
@media screen and (min-width: 1601px) and (max-width: 2048px) {
  .landing .hero {
    background-image: url('/assets/img/background-desktop-2k.jpg');
  }
}
@media screen and (min-width: 2049px) {
  .landing .hero {
    background-image: url('/assets/img/background-desktop-4k.jpg');
  }
}
</style>
