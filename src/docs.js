import Vue from 'vue'
import VueRouter from 'vue-router'

/* global Prism */

// Styles
import 'dh2o-atlantis/scss/index.scss'
import 'dh2o-atlantis/components/dashboards/dashboards.scss'

// Dropdowns
import 'dh2o-atlantis/components/dropdowns/dropdowns.js'
import 'dh2o-atlantis/components/dropdowns/dropdowns.scss'

// Modals
import 'dh2o-atlantis/components/modals/modals.scss'

import App from './docs/app.vue'
import CodeSample from './docs/code-sample.vue'
import routerList from './router.js'

Vue.component('code-sample', CodeSample)

Vue.mixin({
  updated () {
    Prism.highlightAll()
  }
})

// Router setup
Vue.use(VueRouter)
const router = new VueRouter(routerList)

// Initiate Vue
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
