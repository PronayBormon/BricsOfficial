import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import businessView from '../views/business/business.vue'
import postView from '../views/business/businessPost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/business',
      name: 'Business',
      component: businessView
    },
    {
      path: '/postdetails/:id',
      name: 'PostDetails',
      component: ()=> postView
    },
    {
      path: '/history',
      name: 'History Of Brics',
      component: () => import('@/views/history.vue')
    },
    {
      path: '/bricscountry',
      name: 'BRICS Country',
      component: () => import('@/views/country.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/Notfound.vue')
    },
  ]
})

export default router
