require('../src/scss/index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import welcome from './welcome.vue';

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
  render: (h) => h(App)
}).$mount('#app');
