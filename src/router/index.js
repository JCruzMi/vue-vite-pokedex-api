import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../view/Pokelist.vue')

  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Pokelist.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import('../view/Pokemon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router