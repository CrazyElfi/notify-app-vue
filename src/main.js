import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store'

import './assets/scss/main.scss'

// import loader from "vue-ui-preloader"
// Vue.use(loader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // loader,
  render: h => h(App),
}).$mount('#app')

