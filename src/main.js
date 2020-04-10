import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
/* import Vuetify from 'vuetify'
 
Vue.use(Vuetify, {
  theme: {
    primary: '#529AD6',
    secondary: '#8bc34a',
    accent: '#82B1FF',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#FFC107',
    footer: '#505050',
  },
}) */

Vue.config.productionTip = false

// If running inside Cypress...
if (window.Cypress) {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}


const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
  
  window.__app__ = app
}
