import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages'
import About from './pages/about'
import Products from './pages/products'
import Delivery from './pages/delivery'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'products',
        path: '/products',
        component: Products
      },
      {
        name: 'delivery',
        path: '/delivery',
        component: Delivery
      },
      {
        name: 'home',
        path: '/home',
        component: Home
      }
    ]
  })
}
