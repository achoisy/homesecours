<template>
  <section ref="main-hero" class="hero" :class="{ short: isShort }">
    <div
      class="hero-body"
      style="z-index: 5;"
      :class="{ 'py-5': $screen.breakpoint == 'mobile' }"
    >
      <div class="container">
        <div class="columns ">
          <div class="column is-8-tablet is-offset-2-tablet">
            <div
              class="is-flex is-flex-direction-column is-justify-content-space-around"
              :class="$screen.breakpoint != 'mobile' ? 'box box-height' : ''"
            >
              <p
                class="title-500 is-size-4 is-size-3-widescreen is-size-5-mobile"
              >
                Une urgence ? Un problème de sérrure, de plomberie ou encore
                electrique qui nécessite une
                <span class="font-900">intervention urgente</span>? <br />
                En seulement 3 clicks, on prend en charge votre problème !
              </p>
              <b-button
                class="button is-fullwidth is-danger add-shadow is-extra-height is-small-caps"
                size="is-large"
                label="intervention urgente"
                icon-right="clock-fast"
                @click="() => routerPush('urgence')"
              >
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="z-index: 11;"
      :class="
        stickNavbar
          ? 'hero-fixed is-hidden-mobile ease-in sticky'
          : 'hero-foot is-hidden-mobile'
      "
    >
      <nav class="tabs is-boxed is-fullwidth is-large">
        <Menu />
      </nav>
    </div>
  </section>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'UrgentAction',
  components: {
    Menu,
  },
  data: function() {
    return {
      stickNavbar: false,
    };
  },
  mounted() {
    const sentinal = this.$refs['main-hero'];

    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.stickNavbar = false;
      } else {
        this.stickNavbar = true;
      }
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
  computed: {
    isShort: function() {
      if (this.$screen.breakpoint != 'mobile' && this.stickNavbar) {
        return true;
      }
      return false;
    },
  },
  methods: {
    onIntersectionElement: function(value) {
      this.stickNavbar = !value;
    },
    routerPush: function(address) {
      this.$router.push(address);
    },
  },
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

.hero-foot .tabs a {
  color: white;
}

.hero-foot .tabs a:hover {
  color: $turquoise;
}
.hero-foot .tabs li.is-active a {
  background-color: $white-bis;
  color: $turquoise;
  font-family: MuseoSansRounded-900;
}

.ease-in {
  transition-timing-function: ease-in;
}

.hero-fixed {
  position: fixed;
  top: -25px;
  z-index: 10;
  width: 100%;
  color: $white;
  background-color: $cyan;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: all 0.1s;
}

.hero-fixed .tabs a {
  color: white;
}

.hero-fixed .tabs li.is-active a {
  color: $turquoise;
  font-family: MuseoSansRounded-900;
}

.sticky {
  top: 0px;
  opacity: 1;
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
