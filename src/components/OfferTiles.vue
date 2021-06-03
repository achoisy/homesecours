<template>
  <div class="tile is-parent" :class="size">
    <div
      class="card tile is-child  is-flex is-flex-direction-column "
      :class="{ 'carte-offre': isNotMobile }"
    >
      <div class="card-image">
        <figure
          class="image is-4by3"
          :class="{ 'is-4by3': isNotMobile, 'is-2by1': !isNotMobile }"
        >
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
      <div class="card-content is-flex-grow-1 p-4">
        <p class="subtitle line-clamp">{{ offre.text }}</p>
      </div>
      <footer class="card-footer offre-card-footer">
        <b-button
          class="button is-fullwidth is-primary is-extra-height is-small-caps "
          :class="{ 'carte-offre': isNotMobile }"
          size="is-large"
          :label="offre.action.label"
          @click="() => routerPush(`/devis/${offre.id}`)"
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
      questions: Array,
    },
    size: String,
  },
  computed: {
    isNotMobile: function() {
      return this.$screen.breakpoint != 'mobile' ? true : false;
      // return this.$screen.width >= 1024 ? true : false;
    },
  },
  methods: {
    routerPush: function(address) {
      this.$router.push(address);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';
.offre-card-footer {
  height: 4rem;
}
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
.card-content {
  color: $black-ter;
  overflow: hidden;
}
.line-clamp {
  display: -webkit-box;
  text-align: left;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
