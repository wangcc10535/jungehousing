import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/houseList',
    name: 'houseList',
    component: () => import('../views/orderList/housemap.vue')
  },
  {
    path: '/housemap',
    name: 'housemap',
    component: () => import('../views/orderList/housemap.vue')
  },
  {
    path: '/housetable',
    name: 'housetable',
    component: () => import('../views/orderList/housetable.vue')
  },
  {
    path: '/newsList',
    name: 'newsList',
    component: () => import('../views/news/newsList.vue')
  },
  {
    path: '/additional',
    name: 'additional',
    component: () => import('../views/additional/additional.vue')
  },
  {
    path: '/helplist',
    name: 'helplist',
    component: () => import('../views/help/helplist.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/terms/terms.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/privacy/privacy.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
