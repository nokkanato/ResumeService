import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Group from '@/components/Group'
import Register from '@/components/Register'
import Card from '@/components/Cards'
import Preview from '@/components/preview'
import Create from '@/components/create'
import Employer from '@/components/employer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/cards',
      name: 'Card',
      component: Card
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/employer',
      name: 'Employer',
      component: Employer
    }
  ]
})
