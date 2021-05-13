<template>
  <div class="tile is-parent is-vertical">
    <div class="card tile is-child ">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="`/assets/img/${offre.backgroundImage}`"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <p class="title">{{ offre.title }}</p>
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
  },
};
</script>

<style lang="scss">
.carte-offre {
  border-radius: 0px 0px 15px 15px;
}
.is-extra-height {
  height: 4rem;
}
</style>
