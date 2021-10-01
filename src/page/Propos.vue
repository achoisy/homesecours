<template>
  <div class="container is-max-desktop">
    <div class="columns px-2">
      <div class="column">
        <p class="title has-text-primary is-4">
          Notre Histoire
        </p>
        <p class="subtitle">
          <span>HOME SECOURS</span>, société à responsabilité limitée, est en
          activité depuis 7 ans. Implantée à Fort-de-France ainsi qu'à
          Shoelcher, Nous intervenons sur l'ensemble du territoire. Nous
          effectuons tous types de travaux de rénovation, dépannage de problèmes
          électriques, de plomberies... <br />
          <br />
          De plus, nous sommes spécialisés dans l'ouverture de porte et travaux
          de sérrurerie.
        </p>
      </div>
    </div>
    <AvisClient size="is-12" />
  </div>
</template>

<script>
import AvisClient from '../components/AvisClient';

export default {
  name: 'Propos',
  components: {
    AvisClient,
  },
};
</script>

<style></style>
