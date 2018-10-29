import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },{
    path: '/article/:id',
    name: 'View',
    component: View
  }],
    mode: 'history',
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-active"
})