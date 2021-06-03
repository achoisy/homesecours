import Vue from 'vue';
import VueRouter from 'vue-router';

// page import
import Landing from './page/Landing.vue';
import Urgence from './page/Urgence.vue';
import Devis from './page/Devis.vue';

import Accueil from './page/Accueil.vue';
import Contact from './page/Contact.vue';
import Galerie from './page/Galerie.vue';
import Propos from './page/Propos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    redirect: '/accueil',
    children: [
      {
        path: 'accueil',
        name: 'accueil',
        component: Accueil,
        meta: { index: 1 },
      },
      {
        path: 'propos',
        name: 'propos',
        component: Propos,
        meta: { index: 2 },
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
        meta: { index: 3 },
      },
      {
        path: 'galerie',
        name: 'galerie',
        component: Galerie,
        meta: { index: 4 },
      },
    ],
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
