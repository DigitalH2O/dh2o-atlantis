module.exports = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/welcome'},
    {path: '/welcome', component: require('./docs/welcome.vue').default},

    // Layouts
    {path: '/layout', component: require('./docs/layout/layout.vue').default},
    {path: '/sidebar', component: require('./docs/layout/sidebar.vue').default},
    {path: '/widgets', component: require('./docs/layout/widgets.vue').default},
    {path: '/grid', component: require('./docs/layout/grid.vue').default},

    // Misc
    {path: '/misc', component: require('./docs/misc/misc.vue').default},
    {path: '/images', component: require('./docs/misc/images.vue').default},
    {path: '/fonts', component: require('./docs/misc/fonts.vue').default},
    {path: '/colors', component: require('./docs/misc/colors.vue').default},

    // Elements
    {path: '/buttons', component: require('./docs/elements/buttons.vue').default},
    {path: '/tags', component: require('./docs/elements/tags.vue').default},
    {path: '/inputs', component: require('./docs/elements/inputs.vue').default},
    {path: '/groups', component: require('./docs/elements/groups.vue').default},
    {path: '/lists', component: require('./docs/elements/lists.vue').default},
    {path: '/messages', component: require('./docs/elements/messages.vue').default},
    {path: '/tables', component: require('./docs/elements/tables.vue').default},

    // Components
    {path: '/dashboards', component: require('./docs/components/dashboards.vue').default},
    {path: '/dropdowns', component: require('./docs/components/dropdowns.vue').default},
    {path: '/modals', component: require('./docs/components/modals.vue').default},
    {path: '/loading', component: require('./docs/components/loading.vue').default},
    {path: '/nodata', component: require('./docs/components/nodata.vue').default}
  ]
}
