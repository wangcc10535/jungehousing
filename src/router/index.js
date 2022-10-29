/*
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-12 22:12:36
 * @FilePath: \jungehousing\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index'),
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
      title: '新闻详情'
    }
  },
  {
    path: '/m_mapList',
    name: 'm_mapList',
    component: () => import('../views/mobile/m_orderList/m_mapList.vue'),
    meta: {
      title: '地图位置'
    }
  },
  {
    path: '/m_list',
    name: 'm_list',
    component: () => import('../views/mobile/m_orderList/m_list.vue'),
    meta: {
      title: '房产列表'
    }
  },
  {
    path: '/m_detail',
    name: 'm_detail',
    component: () => import('../views/mobile/m_orderList/m_details/m_detail.vue'),
    meta: {
      title: '房产详情'
    }
  },
  {
    path: '/m_typeSearch',
    name: 'm_typeSearch',
    component: () => import('../views/mobile/m_search/m_typeSearch.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/m_addressSearch',
    name: 'm_addressSearch',
    component: () => import('../views/mobile/m_search/m_addressSearch.vue'),
    meta: {
      title: '搜索'
    }
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
   },
});

async function getTerminalType(){
  if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)) {
      return  'mobile';
  } else {
      return 'pc';
  }
}

router.beforeEach(async (to, from, next)=>{
  let terminalType = await getTerminalType();
  if (terminalType === 'mobile' && to.fullPath.indexOf('/index')!==-1) {
      await next({path: '/m_index'})
  } else if (terminalType === 'pc' && to.fullPath.indexOf('/m_index')!==-1) {
      await next({path: '/index'})
  } else {
      await next()
  }
});
export default router;
