import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/houseList',
    name: 'houseList',
    component: () => import('../views/orderList/houselist.vue'),
    meta: {
      title: '房产'
    }
  },
  {
    path: '/housemap',
    name: 'housemap',
    component: () => import('../views/orderList/housemap.vue'),
    meta: {
      title: '房产'
    }
  },
  {
    path: '/housetable',
    name: 'housetable',
    component: () => import('../views/orderList/housetable.vue'),
    meta: {
      title: '房产'
    }
  },
  {
    path: '/newsList',
    name: 'newsList',
    component: () => import('../views/news/newsList.vue'),
    meta: {
      title: '新闻'
    }
  },
  {
    path: '/additional',
    name: 'additional',
    component: () => import('../views/additional/additional.vue'),
    meta: {
      title: '委托'
    }
  },
  {
    path: '/helplist',
    name: 'helplist',
    component: () => import('../views/help/helplist.vue'),
    meta: {
      title: '常见问题'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/terms/terms.vue'),
    meta: {
      title: '服务条款'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/privacy/privacy.vue'),
    meta: {
      title: '隐私声明'
    }
  },
  {
    path: '/baseDetail',
    name: 'baseDetail',
    component: () => import('../views/base/baseDetail.vue'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/commentlist',
    name: 'commentlist',
    component: () => import('../views/comment/commentlist.vue'),
    meta: {
      title: '评论'
    }
  },
  {
    path: '/houseDetail',
    name: 'houseDetail',
    component: () => import('../views/orderList/detail/houseDetail.vue'),
    meta: {
      title: '房产详情'
    }
  },
  {
    path: '/m_index',
    name: 'm_index',
    component: () => import('../views/mobile/m_index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/m_helplist',
    name: 'm_helplist',
    component: () => import('../views/mobile/m_help/m_helplist.vue'),
    meta: {
      title: '常见问题'
    }
  },
  {
    path: '/m_newsList',
    name: 'm_newsList',
    component: () => import('../views/mobile/m_news/m_newsList.vue'),
    meta: {
      title: '房地产新闻'
    }
  },
  {
    path: '/m_additional',
    name: 'm_additional',
    component: () => import('../views/mobile/m_additional/m_additional.vue'),
    meta: {
      title: '委托'
    }
  },
  {
    path: '/m_newsDetail',
    name: 'm_newsDetail',
    component: () => import('../views/mobile/m_news/m_newsDetail/m_newsDetail.vue'),
    meta: {
      title: '详情'
    }
  },
];


const router = new VueRouter({
  routes
});
export default router;
