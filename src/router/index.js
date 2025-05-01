import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/memories'
    },
  {
    path: '/memories',
    name: 'memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    name: 'memory',
    component: () => import('../pages/MemoriesDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
