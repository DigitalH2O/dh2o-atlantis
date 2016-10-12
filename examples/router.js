module.exports = {
  mode: 'history',
  base: '/',
  routes: [
    {path: '/', component: require('./files/welcome.vue')},

    // Layouts
    {path: '/layout', component: require('./files/layout/layout.vue')},
    {path: '/menu', component: require('./files/layout/menu.vue')},
    {path: '/sections', component: require('./files/layout/sections.vue')},
    {path: '/flexboxgrid', component: require('./files/layout/flexboxgrid.vue')},

    // Misc
    {path: '/misc', component: require('./files/misc/misc.vue')},
    {path: '/images', component: require('./files/misc/images.vue')},
    {path: '/fonts', component: require('./files/misc/fonts.vue')},
    {path: '/colors', component: require('./files/misc/colors.vue')},

    // Elements
    {path: '/buttons', component: require('./files/elements/buttons.vue')},
    {path: '/inputs', component: require('./files/elements/inputs.vue')},
    {path: '/lists', component: require('./files/elements/lists.vue')},
    {path: '/messages', component: require('./files/elements/messages.vue')},
    {path: '/tables', component: require('./files/elements/tables.vue')},

    // Components
    {path: '/dropdowns', component: require('./files/components/dropdowns.vue')},
    {path: '/modals', component: require('./files/components/modals.vue')}
  ]
};
