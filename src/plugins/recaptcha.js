import Vue from 'vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';

Vue.use(VueReCaptcha, {
  siteKey: '6Ldv2doaAAAAAIBLBFIZhX_R-9Pi8OSMgb5WT351',
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
  },
});
