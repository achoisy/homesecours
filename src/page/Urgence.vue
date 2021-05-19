<template>
  <section
    class="hero is-fullheight has-background-white-bis"
    :class="{ 'on-mobile pb-5': $screen.breakpoint == 'mobile' }"
  >
    <div
      class="hero-head has-background-danger is-flex is-align-items-center is-justify-content-space-between"
      :class="{ 'p-5': $screen.width >= 1024, 'p-3': $screen.width >= 600 }"
    >
      <p class="title is-size-5-mobile has-text-light m-4">
        Demande Urgente d'Intervention
      </p>
      <a class="p-5" @click="() => routerPush('landing')">
        <span class="icon has-text-white is-size-3 is-size-4-mobile">
          <i class="fas fa-arrow-circle-left fa-lg"></i>
        </span>
      </a>
    </div>
    <div
      class="hero-body is-align-items-start"
      :class="{ 'pt-2 px-0 pb-6': $screen.breakpoint == 'mobile' }"
    >
      <div class="container is-max-desktop">
        <b-steps
          v-model="activeStep"
          animated
          rounded
          mobile-mode="compact"
          :has-navigation="false"
          class="is-justify-content-flex-start"
        >
          <b-step-item step="1" label="Informations">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Nom</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control has-icons-left has-icons-right">
                      <input
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
          <b-step-item step="2" label="Raison">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Raison</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <div class="select">
                        <select>
                          <option>Serrurerie</option>
                          <option>Plomberie</option>
                          <option>Electricité</option>
                          <option>Autre...</option>
                        </select>
                      </div>
                    </div>
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
                        class="textarea"
                        placeholder="Précision sur la nature de votre demande"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </b-step-item>
          <b-step-item step="3" label="Confirmer">
            <form :class="{ 'p-6': $screen.breakpoint != 'mobile' }">
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" />
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Cancel</button>
                </div>
              </div>
            </form>
          </b-step-item>

          <template #navigation="{previous, next}">
            <div class="box is-bottom-fixed ">
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
                    :disabled="next.disabled"
                    @click="() => nextStep(next)"
                  >
                    <span class="is-size-5 mb-1">suivant</span>
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

export default {
  name: 'Urgence',
  data: function() {
    return {
      activeStep: 0,
      form: {
        nom: '',
        tel: '',
        adresse: '',
        message: '',
        raison: '',
        condition: false,
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
    },
  },
};
</script>

<style lang="scss">
.hero.is-fullheight.on-mobile {
  min-height: calc(100vh - 80px);
}
.b-steps {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.is-bottom-fixed {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  z-index: 10;
}

.notices.is-bottom {
  bottom: 80px !important;
}
</style>
