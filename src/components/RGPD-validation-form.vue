<template>
  <form action="" class="p-3">
    <div class="modal-card" style="max-width: 400px;">
      <section class="modal-card-body py-6">
        <b-field>
          <b-checkbox>
            J’accepte les règles d’utilisation du site homesecours.fr et le
            traitement de mes donneées en conformité avec le RGPD.
          </b-checkbox>
        </b-field>
        <button
          class="button is-large is-primary is-outlined is-fullwidth field"
        >
          Refuser
        </button>
        <button
          class="button is-large is-primary is-fullwidth is-small-caps field"
        >
          Accepter
        </button>
        <button class="button is-text is-fullwidth field">
          Regle d’utilisation des données et CGU
        </button>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RGPD-validation-form',
};
</script>

<style>
form .modal-card {
  border-radius: 1rem;
}
form .modal-card .field:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
