/*
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-09-27 02:46:26
 * @FilePath: \jungehousing\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
import navDrawer from '@/components/mobile_c/m_header.vue'
import '@/assets/css/iconfont/iconfont.css'
// 分页组件
import Pagination from "@/components/Pagination";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css' // 引入css
Vue.component('Pagination', Pagination)
Vue.component('breadcrumb', breadcrumb)
Vue.component('navDrawer', navDrawer)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Viewer)
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
