<template>
  <section
    class="hero is-fullheight has-background-white-bis"
    :class="{ 'on-mobile': $screen.breakpoint == 'mobile' }"
  >
    <div
      class="hero-head has-background-primary is-flex is-align-items-center is-justify-content-space-between"
      :class="{ 'p-5': $screen.width >= 1024, 'p-3': $screen.width >= 600 }"
    >
      <p class="title is-size-5-mobile has-text-light m-4">
        Demande de Devis <br />
        {{ offre.title }}
      </p>
      <a class="p-5" @click="() => routerPush('/')">
        <span class="icon has-text-white is-size-3 is-size-4-mobile">
          <i class="fas fa-times-circle fa-lg"></i>
        </span>
      </a>
    </div>
    <div
      class="hero-body is-align-items-start"
      :class="{
        'pt-2 px-0 pb-6 is-display-block': $screen.breakpoint == 'mobile',
      }"
    >
      <div class="container is-max-desktop">
        <b-steps
          v-model="activeStep"
          animated
          rounded
          mobile-mode="compact"
          :has-navigation="false"
          class="is-flex is-flex-direction-column is-justify-content-flex-start"
        >
          <b-step-item step="1" label="Raison">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Raison</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <div
                        class="select"
                        :class="{
                          'is-danger': error.raison,
                          'is-success': form.raison && !error.raison,
                        }"
                      >
                        <select
                          name="raison"
                          v-model="form.raison"
                          @change="inputUpdate"
                        >
                          <option disabled value=""
                            >Selectionnez votre besoin...</option
                          >
                          <option
                            v-for="(question, index) in offre.questions"
                            :key="index"
                          >
                            {{ question.title }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <p v-if="error.raison" class="help is-danger">
                      {{ error.raison }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Message</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        v-model="form.message"
                        class="textarea"
                        placeholder="Précision sur la nature de votre demande"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </b-step-item>
          <b-step-item step="2" label="Informations">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Nom</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control has-icons-left has-icons-right">
                      <input
                        ref="nom"
                        class="input"
                        name="nom"
                        :class="{
                          'is-danger': error.nom,
                          'is-success': form.nom.length > 3 && !error.nom,
                        }"
                        type="text"
                        placeholder="ex: John Doe"
                        v-model="form.nom"
                        @blur="inputUpdate"
                        @focus="hideButton"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                      <span
                        class="icon is-small is-right "
                        :class="{
                          'has-text-success': form.nom.length > 3 && !error.nom,
                          'has-text-danger': error.nom,
                        }"
                      >
                        <i
                          class="fas"
                          :class="{
                            'fa-check': form.nom.length > 3 && !error.nom,
                            'fa-exclamation-triangle': error.nom,
                          }"
                        ></i>
                      </span>
                    </div>
                    <p v-if="error.nom" class="help is-danger">
                      {{ error.nom }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Téléphone</label>
                </div>
                <div class="field-body is-flex-direction-column">
                  <div class="field has-addons">
                    <p class="control">
                      <span class="select">
                        <select v-model="regionCode">
                          <option value="MQ">+596</option>
                          <option value="GP">+590</option>
                          <option value="FR">+33</option>
                        </select>
                      </span>
                    </p>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        ref="tel"
                        name="tel"
                        class="input"
                        :class="{
                          'is-danger': error.tel,
                          'is-success': checkPhone && !error.tel,
                        }"
                        type="tel"
                        placeholder="ex: 0696123456"
                        v-model="form.tel"
                        @blur="inputUpdate"
                        @focus="hideButton"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-phone"></i>
                      </span>
                      <span
                        class="icon is-small is-right"
                        :class="{
                          'has-text-success': checkPhone && !error.tel,
                          'has-text-danger': error.tel,
                        }"
                      >
                        <i
                          class="fas"
                          :class="{
                            'fa-check': checkPhone && !error.tel,
                            'fa-exclamation-triangle': error.tel,
                          }"
                        ></i>
                      </span>
                    </div>
                  </div>
                  <p v-if="error.tel" class="help is-danger">
                    {{ error.tel }}
                  </p>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Adresse d'intervention</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        v-model="form.adresse"
                        class="textarea"
                        placeholder="Adresse d'intervention ainsi que toutes informations utiles ex: digicode, batiment, étage..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </b-step-item>

          <b-step-item step="3" label="Confirmer" type="is-success">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <p class="mb-2">
                Veuillez vérifier vos informations avant de confirmer votre
                demande.
              </p>
              <span><strong>Nom: </strong>{{ form.nom }}</span> <br />
              <span><strong>Téléphone: </strong>{{ fullNumber }}</span> <br />
              <span><strong>Adresse: </strong>{{ form.adresse }}</span> <br />
              <span><strong>Raison: </strong>{{ form.raison }}</span> <br />
              <span><strong>Message: </strong>{{ form.message }}</span> <br />
              <div class="field mt-4">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" v-model="form.condition" />
                    J'accepte
                    <a href="#">les termes et conditions d'utilisation</a> du
                    site homesecours.fr
                  </label>
                </div>
              </div>
            </form>
          </b-step-item>

          <template #navigation="{previous, next}">
            <div
              class="box is-bottom-fixed "
              :class="{ 'is-hidden-mobile': !navigationButton }"
            >
              <div class="columns is-mobile is-centered is-flex-direction-row">
                <div class="column is-half-mobile is-3-desktop">
                  <button
                    class="button is-info is-outlined is-small-caps is-fullwidth"
                    :disabled="previous.disabled"
                    @click="previous.action"
                  >
                    <span class="icon is-size-5">
                      <i class="fas fa-chevron-left"></i>
                    </span>
                    <span class="is-size-5 mb-1">retour</span>
                  </button>
                </div>
                <div class="column is-half-mobile is-3-desktop">
                  <button
                    class="button is-info is-small-caps is-fullwidth"
                    :class="{ 'is-hidden': activeStep >= 2 }"
                    :disabled="next.disabled"
                    @click="() => nextStep(next)"
                  >
                    <span class="is-size-5 mb-1">suivant</span>
                    <span class="icon is-size-5">
                      <i class="fas fa-chevron-right"></i>
                    </span>
                  </button>
                  <button
                    class="button is-success is-small-caps is-fullwidth"
                    :class="{ 'is-hidden': activeStep < 2 }"
                    :disabled="!form.condition"
                    @click="confirmAlert"
                  >
                    <span class="is-size-5 mb-1">confirmer</span>
                    <span class="icon is-size-5">
                      <i class="fas fa-chevron-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </b-steps>
      </div>
    </div>
  </section>
</template>

<script>
import PhoneNumber from 'awesome-phonenumber';
import productList from '../assets/product-list.json';

export default {
  name: 'Devis',
  props: {
    id: String,
  },
  data: function() {
    return {
      offres: productList,
      activeStep: 0,
      navigationButton: true,
      form: {
        nom: '',
        tel: '',
        adresse: '',
        message: '',
        raison: '',
        condition: true,
        token: '',
      },
      regionCode: 'MQ',
      error: {
        nom: '',
        tel: '',
        adresse: '',
        message: '',
        raison: '',
        condition: false,
      },
    };
  },
  computed: {
    checkPhone: function() {
      const tel = new PhoneNumber(this.form.tel, this.regionCode);
      return tel.isValid();
    },
    fullNumber: function() {
      const tel = new PhoneNumber(this.form.tel, this.regionCode);
      return tel.getNumber('international');
    },
    offre: function() {
      return this.offres.find((offre) => offre.id == this.id);
    },
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();
      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login');
      // Send the token to server with submited form for validation.
    },
    routerPush: function(address) {
      this.$router.push(address);
    },
    toast: function(type, message) {
      this.$buefy.toast.open({
        message,
        type,
        position: 'is-bottom',
      });
    },
    nextStep: function(next) {
      let valideStep = true;
      if (this.activeStep == 0) {
        if (this.form.raison.length <= 0) {
          valideStep = false;
          this.error.raison = 'Veuillez faire un choix !';
          this.toast('is-danger', this.error.raison);
        }
      } else if (this.activeStep == 1) {
        //Check if there is a name
        if (this.form.nom.length <= 3) {
          valideStep = false;
          this.error.nom = 'Votre nom est requis !';
          this.toast('is-danger', this.error.nom);
        }
        //Check if there is a valide phone number
        if (!this.form.tel) {
          valideStep = false;
          this.error.tel = 'Votre numéro de téléphone est requis !';
          this.toast('is-danger', this.error.tel);
        } else if (!this.checkPhone) {
          valideStep = false;
          this.error.tel = "Votre numéro de téléphone n'est pas valide !";
          this.toast('is-danger', this.error.tel);
        }
      }

      if (valideStep) {
        next.action();
      }
    },
    inputUpdate: function({ target }) {
      this.error[target.name] = '';
      this.unhideButton();
    },
    hideButton: function() {
      this.navigationButton = false;
    },
    unhideButton: function() {
      this.navigationButton = true;
    },
    confirmAlert: function() {
      this.$buefy.dialog.alert({
        message: `Notre service ${this.offre.title.toLowerCase()} va vous recontacter dans les minutes qui suivront. Veuillez Garder votre téléphone à porter de main. merci.`,
        confirmText: 'OK',
        onConfirm: this.isConfirm,
      });
    },
    isConfirm: function() {
      // TODO: faire le fetch vers le serveur
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
.hero.is-fullheight.on-mobile {
  min-height: calc(100vh - 80px);
  padding-bottom: 40px;
}
</style>
