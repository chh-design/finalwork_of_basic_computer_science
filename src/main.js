import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter(RouterConfig)

new Vue
({
  router,
  render: h => h(App),
}).$mount('#app')
