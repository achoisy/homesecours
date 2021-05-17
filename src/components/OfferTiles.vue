<template>
  <div class="tile is-parent" :class="size">
    <div
      class="card tile is-child carte-offre is-flex is-flex-direction-column "
    >
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="`/assets/img/${offre.backgroundImage}`"
            alt="Placeholder image"
          />
          <div
            class="box p-2 over-image font-900 has-text-centered has-text-left-mobile	"
            :class="{ 'p-3': isNotMobile }"
          >
            <p class="title has-text-primary">{{ offre.title }}</p>
          </div>
        </figure>
      </div>
      <div class="card-content is-flex-grow-1">
        <p class="subtitle">{{ offre.text }}</p>
      </div>
      <footer class="card-footer">
        <b-button
          class="button is-fullwidth is-primary is-extra-height is-small-caps carte-offre"
          size="is-large"
          label="prendre rendez-vous"
          icon-right="calendar-month-outline"
        >
        </b-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offertiles',
  props: {
    offre: {
      id: String,
      title: String,
      text: String,
      color: String,
      backgroundImage: String,
    },
    size: String,
  },
  computed: {
    isNotMobile: function() {
      //return this.$screen.breakpoint != 'mobile' ? true : false;
      return this.$screen.width >= 1024 ? true : false;
    },
  },
};
</script>

<style lang="scss">
.carte-offre {
  border-radius: 5px 5px 15px 15px;
}

footer .carte-offre {
  border-radius: 0px 0px 15px 15px;
}

.is-extra-height {
  height: 4rem;
}

.over-image {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  max-width: 250px;
}
</style>
