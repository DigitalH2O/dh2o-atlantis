require('../src/scss/index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';
/* global Prism */

Vue.mixin({
  updated() {
    Prism.highlightAll()
  },
});

import App from './App.vue';

import welcome from './welcome.vue';

import layout from './layout/layout.vue';
import menu from './layout/menu.vue';
import flexboxgrid from './layout/flexboxgrid.vue';
import sections from './layout/sections.vue';


import buttons from './buttons.vue';
import colors from './colors.vue';
import fonts from './fonts.vue';
import images from './images.vue';
import inputs from './inputs.vue';
import lists from './lists.vue';
import messages from './messages.vue';
import misc from './misc.vue';
import tables from './tables.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: welcome
    },

    {
      path: '/layout',
      component: layout
    },
    {
      path: '/menu',
      component: menu
    },
    {
      path: '/sections',
      component: sections
    },
    {
      path: '/flexboxgrid',
      component: flexboxgrid
    },

    {
      path: '/buttons',
      component: buttons
    },
    {
      path: '/colors',
      component: colors
    },
    {
      path: '/fonts',
      component: fonts
    },
    {
      path: '/images',
      component: images
    },
    {
      path: '/inputs',
      component: inputs
    },
    {
      path: '/lists',
      component: lists
    },
    {
      path: '/messages',
      component: messages
    },
    {
      path: '/misc',
      component: misc
    },
    {
      path: '/tables',
      component: tables
    }
  ]
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
