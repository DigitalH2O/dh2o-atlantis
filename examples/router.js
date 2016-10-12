module.exports = {
  mode: 'history',
  base: '/',
  routes: [
    {path: '/', component: require('./welcome.vue')},

    // Layouts
    {path: '/layout', component: require('./layout/layout.vue')},
    {path: '/menu', component: require('./layout/menu.vue')},
    {path: '/sections', component: require('./layout/sections.vue')},
    {path: '/flexboxgrid', component: require('./layout/flexboxgrid.vue')},

    // Elements
    {path: '/buttons', component: require('./buttons.vue')},
    {path: '/colors', component: require('./colors.vue')},
    {path: '/fonts', component: require('./fonts.vue')},
    {path: '/images', component: require('./images.vue')},
    {path: '/inputs', component: require('./inputs.vue')},
    {path: '/lists', component: require('./lists.vue')},
    {path: '/messages', component: require('./messages.vue')},
    {path: '/tables', component: require('./tables.vue')},
    {path: '/misc', component: require('./misc.vue')},

    // Components
    {path: '/dropdowns', component: require('./dropdowns.vue')},
    {path: '/modals', component: require('./modals.vue')}
  ]
};
