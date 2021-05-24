import Vue from 'vue';
import VueRouter from 'vue-router';

// page import
import Landing from './page/Landing.vue';
import Urgence from './page/Urgence.vue';
import Devis from './page/Devis.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/urgence',
    name: 'urgence',
    component: Urgence,
  },
  {
    path: '/devis/:id',
    name: 'devis',
    component: Devis,
    props: true,
  },
  {
    path: '*',
    redirect: {
      name: 'landing',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
