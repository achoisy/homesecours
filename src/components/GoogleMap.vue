<template>
  <div class="tile is-parent" :class="size">
    <div class="card tile is-child is-centered carte-offre primary-outlined">
      <div class="card-image" @click="openGoogleMap">
        <figure class="image">
          <img
            :src="
              `https://maps.googleapis.com/maps/api/staticmap?${googleParameters}`
            "
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer style="width: 100%;">
        <b-button
          class="button is-fullwidth has-text-primary is-small-caps carte-offre"
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

.is-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
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
