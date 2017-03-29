module.exports = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/welcome'},
    {path: '/welcome', component: require('./docs/welcome.vue')},

    // Layouts
    {path: '/layout', component: require('./docs/layout/layout.vue')},
    {path: '/sidebar', component: require('./docs/layout/sidebar.vue')},
    {path: '/menus', component: require('./docs/layout/menus.vue')},
    {path: '/articles', component: require('./docs/layout/articles.vue')},
    {path: '/grid', component: require('./docs/layout/grid.vue')},

    // Misc
    {path: '/misc', component: require('./docs/misc/misc.vue')},
    {path: '/images', component: require('./docs/misc/images.vue')},
    {path: '/fonts', component: require('./docs/misc/fonts.vue')},
    {path: '/colors', component: require('./docs/misc/colors.vue')},

    // Elements
    {path: '/buttons', component: require('./docs/elements/buttons.vue')},
    {path: '/tags', component: require('./docs/elements/tags.vue')},
    {path: '/inputs', component: require('./docs/elements/inputs.vue')},
    {path: '/groups', component: require('./docs/elements/groups.vue')},
    {path: '/lists', component: require('./docs/elements/lists.vue')},
    {path: '/messages', component: require('./docs/elements/messages.vue')},
    {path: '/tables', component: require('./docs/elements/tables.vue')},

    // Components
    {path: '/dropdowns', component: require('./docs/components/dropdowns.vue')},
    {path: '/modals', component: require('./docs/components/modals.vue')},
    {path: '/loading', component: require('./docs/components/loading.vue')}
  ]
}
