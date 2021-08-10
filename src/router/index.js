import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import Pokemon from '@/components/Pokemon'
import NotFound from '@/components/NotFound'

Vue.use(Router);

/**
 * Manages all routes (and creates dynamical routes for pokemons)
 * @module  Router
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: './',
      name: 'Table',
      component: Table
    },
    { path: './pokemon/:id', component: Pokemon },
    { path: "./error", component: NotFound },
    { path: "*", component: NotFound }
  ]
})
