import App from './files/app.vue';
import routerList from './router';

// Styles
import '../src/scss/index.scss';

// Dropdowns
import '../src/components/dropdowns/dropdowns.js';
import '../src/components/dropdowns/dropdowns.scss';

// Modals
import '../src/components/modals/modals.js';
import '../src/components/modals/modals.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

/* global Prism */

Vue.mixin({
  updated() {
    Prism.highlightAll();
  },
});

// Router setup
Vue.use(VueRouter);
const router = new VueRouter(routerList);

// Initiate Vue
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
