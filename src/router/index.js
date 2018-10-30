import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import View from '@/components/View'
import Form from '@/components/Form'
import Edit from '@/components/Edit'

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
  },{
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }, {
    path: '/new-article',
    name: 'Form',
    component: Form
  }],
    mode: 'history',
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-active"
})