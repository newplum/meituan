import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/goods/:name',
          name: 'goods',
          component: () => import('@/page/goodsList')
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('@/page/index')
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/layout/blank'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import ('@/page/login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import ('@/page/register.vue')
        }
      ]
    }
  ]
})
