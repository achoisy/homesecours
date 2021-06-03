<template>
  <div class="tile is-parent" :class="size">
    <div
      class="tile card is-child carte-offre is-flex is-flex-direction-column"
    >
      <div
        class="card-image is-flex-grow-1 image-is-centered"
        @click="openGoogleMap"
      >
        <figure class="image">
          <img
            :src="
              `https://maps.googleapis.com/maps/api/staticmap?${googleParameters}`
            "
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer class="offre-card-footer" style="width: 100%;">
        <b-button
          class="button is-fullwidth is-primary is-extra-height is-small-caps"
          :class="{ 'carte-offre': isNotMobile }"
          size="is-large"
          label="rechercher itinéraire"
          icon-right="map-marker-radius-outline"
          @click="openGoogleMap"
        >
        </b-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    size: String,
  },
  computed: {
    googleParameters: function() {
      const mapMaker =
        'markers=label:Home Secours|14.608202,-61.091635&zoom=15&size=400x400&key=AIzaSyCGcz-eYSzyRnV2gkOv_dFbk6JL6IbXoMQ';
      return encodeURI(mapMaker);
    },
    isNotMobile: function() {
      return this.$screen.breakpoint != 'mobile' ? true : false;
      // return this.$screen.width >= 1024 ? true : false;
    },
  },
  methods: {
    openGoogleMap: function() {
      window.open(
        'https://www.google.com/maps/dir/?api=1&destination=14.608202,-61.091635',
        '_blank'
      );
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

.image-is-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.primary-outlined {
  border: 1.5px solid $blue-lighter;
}
.primary-outlined footer .button {
  border-top: 1.5px solid $blue-lighter;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>
