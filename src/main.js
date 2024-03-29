import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './Router/routes.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueChatScroll from 'vue-chat-scroll'




Vue.use(BootstrapVue)
Vue.use(VueChatScroll)

Vue.use(VueRouter)
const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
