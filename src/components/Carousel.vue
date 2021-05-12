<template>
  <b-carousel :indicator="false">
    <b-carousel-item v-for="(avis, i) in listAvis" :key="i">
      <div class="avis-box">
        <b-rate :value="avis.note" show-score disabled />
        <p class="subtitle">{{ avis.text }}</p>
        <p class="title is-size-5">{{ avis.nom }}</p>
      </div>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  components: {},
  data: function() {
    return {
      listAvis: [
        {
          nom: 'AURÉLIE L.',
          note: 5,
          text: 'Intervention rapide et technicien agréable',
        },
        {
          nom: 'Angèle V.',
          note: 5,
          text:
            "Réactivité et qualité de l'intervention étaient au rendez-vous ! C est important de se sentir en confiance.",
        },
        {
          nom: 'CATHERINE A.',
          note: 4.5,
          text: 'Intervention rapide et technicien agréable',
        },
        {
          nom: 'ALAIN L.',
          note: 5,
          text: 'Intervention très rapide un week-end de paques',
        },
        {
          nom: 'SLIMANE R.',
          note: 5,
          text: "Très bonne prestation A l'écoute rapide et efficace",
        },
        {
          nom: 'Flora E.',
          note: 4,
          text: 'Réactivité au top. Service irréprochable !',
        },
      ],
    };
  },
};
</script>

<style>
.avis-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
