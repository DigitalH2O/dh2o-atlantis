module.exports = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/welcome'},
    {path: '/welcome', component: () => import('./docs/welcome.vue')},

    // Layouts
    {path: '/layout', component: () => import('./docs/layout/layout.vue')},
    {path: '/sidebar', component: () => import('./docs/layout/sidebar.vue')},
    {path: '/widgets', component: () => import('./docs/layout/widgets.vue')},
    {path: '/grid', component: () => import('./docs/layout/grid.vue')},

    // Misc
    {path: '/misc', component: () => import('./docs/misc/misc.vue')},
    {path: '/images', component: () => import('./docs/misc/images.vue')},
    {path: '/fonts', component: () => import('./docs/misc/fonts.vue')},
    {path: '/colors', component: () => import('./docs/misc/colors.vue')},

    // Elements
    {path: '/buttons', component: () => import('./docs/elements/buttons.vue')},
    {path: '/tags', component: () => import('./docs/elements/tags.vue')},
    {path: '/inputs', component: () => import('./docs/elements/inputs.vue')},
    {path: '/groups', component: () => import('./docs/elements/groups.vue')},
    {path: '/lists', component: () => import('./docs/elements/lists.vue')},
    {path: '/messages', component: () => import('./docs/elements/messages.vue')},
    {path: '/tables', component: () => import('./docs/elements/tables.vue')},

    // Components
    {path: '/dashboards', component: () => import('./docs/components/dashboards.vue')},
    {path: '/dropdowns', component: () => import('./docs/components/dropdowns.vue')},
    {path: '/modals', component: () => import('./docs/components/modals.vue')},
    {path: '/drawer', component: () => import('./docs/components/drawer.vue')},
    {path: '/loading', component: () => import('./docs/components/loading.vue')},
    {path: '/nodata', component: () => import('./docs/components/nodata.vue')}
  ]
}
