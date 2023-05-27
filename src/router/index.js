import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingLayout from '@/layouts/LandingLayout.vue'
import ExhibitionLayout from '@/layouts/ExhibitionLayout.vue'
import LandingView from '@/views/LandingView.vue'
import ExhibitionView from '@/views/ExhibitionView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import FaqView from '@/views/FaqView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import LoginView from '@/views/LoginView.vue'
import ErrorView from '@/views/error/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
    meta: { layout: LandingLayout }
  },
  {
    path: '/server-error',
    name: 'server-error',
    component: ErrorView,
    meta: { layout: LandingLayout }
  },
  {
    path: '/page-not-found',
    name: 'page-not-found',
    component: ErrorView,
    meta: { layout: ExhibitionLayout }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/exhibition',
    name: 'exhibition',
    component: ExhibitionView,
    meta: { shopsearch: false, layout: ExhibitionLayout }
  },
  {
    path: '/exhibition/product/:slug?',
    name: 'product',
    component: ProductView,
    meta: { layout: ExhibitionLayout }
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView,
    meta: { layout: LandingLayout }
  },
  {
    path: '/faq/:id?',
    name: 'faq-detail',
    component: FaqView,
    meta: { layout: LandingLayout }
  },
  // {
  //   path: '/faq/question/:id?',
  //   name: 'faq',
  //   component: FaqView,
  //   props: { content: 'question-detail' },
  //   meta: { layout: LandingLayout }
  // },
  {
    path: '/:domain?',
    name: 'shop',
    component: ShopView,
    meta: { shopsearch: true, layout: ExhibitionLayout }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return savedPosition
    }
    // return {
    //   selector: to.hash,
    // }
  }
})

export default router
