import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import NossosAcontecimentos from '../views/NossosAcontecimentos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: PaginaInicial
  },
  {
    path: '/acontecimentos',
    name: 'NossosAcontecimentos',
    component: NossosAcontecimentos
  },
]

const router = new VueRouter({
  routes
})

export default router