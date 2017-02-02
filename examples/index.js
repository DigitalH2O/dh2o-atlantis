import Vue from 'vue'
import VueRouter from 'vue-router'

/* global Prism */

// Styles
import '../src/scss/index.scss'

// Components
import '../src/components/components.js'

// Dropdowns
import '../src/components/dropdowns/dropdowns.scss'

// Modals
import '../src/components/modals/modals.scss'

import App from './files/app.vue'
import CodeSample from './files/code-sample.vue'
import routerList from './router'

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
