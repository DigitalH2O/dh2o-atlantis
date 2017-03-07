module.exports = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/welcome'},
    {path: '/welcome', component: require('./files/welcome.vue')},

    // Layouts
    {path: '/layout', component: require('./files/layout/layout.vue')},
    {path: '/sidebar', component: require('./files/layout/sidebar.vue')},
    {path: '/menus', component: require('./files/layout/menus.vue')},
    {path: '/articles', component: require('./files/layout/articles.vue')},
    {path: '/grid', component: require('./files/layout/grid.vue')},

    // Misc
    {path: '/misc', component: require('./files/misc/misc.vue')},
    {path: '/images', component: require('./files/misc/images.vue')},
    {path: '/fonts', component: require('./files/misc/fonts.vue')},
    {path: '/colors', component: require('./files/misc/colors.vue')},

    // Elements
    {path: '/buttons', component: require('./files/elements/buttons.vue')},
    {path: '/tags', component: require('./files/elements/tags.vue')},
    {path: '/inputs', component: require('./files/elements/inputs.vue')},
    {path: '/groups', component: require('./files/elements/groups.vue')},
    {path: '/lists', component: require('./files/elements/lists.vue')},
    {path: '/messages', component: require('./files/elements/messages.vue')},
    {path: '/tables', component: require('./files/elements/tables.vue')},

    // Components
    {path: '/dropdowns', component: require('./files/components/dropdowns.vue')},
    {path: '/modals', component: require('./files/components/modals.vue')}
  ]
}
