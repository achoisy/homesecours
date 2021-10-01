<template>
  <div class="container is-max-desktop">
    <div class="columns">
      <div class="column is-full">
        <div class="block">
          <img :src="`/assets/img/logo-${isMobile ? '42x42' : '62x62'}.png`" />
          <img
            :src="
              `/assets/img/logo-home-secours-${
                isMobile ? 'small' : 'medium'
              }.png`
            "
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <figure class="image is-4by4" @click="openGoogleMap">
          <img
            :src="
              `https://maps.googleapis.com/maps/api/staticmap?${googleParameters}`
            "
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="column">
        <div class="block">
          <span class="icon-text has-text-primary mb-3">
            <span class="icon mr-3">
              <i class="fas fa-home fa-2x"></i>
            </span>
            <span class="title has-text-primary is-4">Notre Adresse</span>
          </span>
          <p class="subtitle">
            13-21 Boulevard Du 25 juin 1635 <br />
            Shoelcher
          </p>

          <span class="icon-text has-text-primary mb-3">
            <span class="icon mr-3">
              <i class="fas fa-phone fa-2x"></i>
            </span>
            <span class="title has-text-primary is-4">Nos numéros</span>
          </span>
          <p class="subtitle">
            Hotline: 07 55 53 68 96 <br />
            Portable: 06 96 38 06 02
          </p>

          <span class="icon-text has-text-primary mb-3">
            <span class="icon mr-3">
              <i class="fas fa-at fa-2x"></i>
            </span>
            <span class="title has-text-primary is-4">Notre Email</span>
          </span>
          <p class="subtitle">
            <a href="mailto:homesecours@gmail.com">homesecours@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GoogleMap from '../components/GoogleMap';

export default {
  name: 'Contact',
  components: {
    // GoogleMap,
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
    isMobile: function() {
      return this.$screen.width < 1024 ? true : false;
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

<style></style>
