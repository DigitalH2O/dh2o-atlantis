require('../src/scss/index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: App
    }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
