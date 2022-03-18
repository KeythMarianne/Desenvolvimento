import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import NossosAcontecimentos from '../views/NossosAcontecimentos.vue'
import MinhaPergunta from '../views/MinhaPergunta.vue'
import MinhaSurpresa from '../views/MinhaSurpresa.vue'
import ChamadaApi from '../views/ChamadaApi.vue'
import NossasFotos from '../views/NossasFotos.vue'
import FormularioAmor from '../views/FormularioAmor.vue'

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
  {
    path: '/pergunta',
    name: 'MinhaPergunta',
    component: MinhaPergunta
  },
  {
    path: '/surpresa',
    name: 'MinhaSurpresa',
    component: MinhaSurpresa
  },
  {
    path: '/api',
    name: 'ChamadaApi',
    component: ChamadaApi
  },
  {
    path: '/fotos',
    name: 'NossasFotos',
    component: NossasFotos
  },
  {
    path: '/formulario',
    name: 'FormularioAmor',
    component: FormularioAmor
  },
]

const router = new VueRouter({
  routes
})

export default router