import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    }, {
      path: '/bilibili',
      name: 'BiliBili',
      component: () => import('@/views/bilibili/index')
    }, {
      path: '/aiqiyi',
      name: 'aiqiyi',
      component: () => import('@/views/aiqiyi/index')
    }, {
      path: '/lagou',
      name: 'lagou',
      component: () => import('@/views/lagou/index')
    }
  ]
})
