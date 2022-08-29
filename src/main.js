import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import i18n from './utils/index'
import 'swiper/css/swiper.css'
import breadcrumb from '@/components/breadcrumb.vue'

Vue.component('breadcrumb', breadcrumb)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
