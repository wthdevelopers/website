import Vue from 'vue'
import Router from 'vue-router'
import sponsor from '@/components/sponsor'
import index from '@/components/index'
import faq from '@/components/faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/sponsor',
      name: '/sponsor',
      component: sponsor
    },
    {
      path: '/index',
      name: '/index',
      component: index
    },
    {
      path: '/faq',
      name: '/faq',
      component: faq
    }
  ]
})
