import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../pages/PageDashboard'
import PageAbout from '../pages/PageAbout'
import Page404 from '../pages/Page404'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/:command/:target/:category',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
})

export default router