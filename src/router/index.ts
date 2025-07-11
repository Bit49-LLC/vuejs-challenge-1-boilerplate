import { createRouter, createWebHistory } from 'vue-router'
import PokemonListVue from '@/views/PokemonList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return 'pokedex'
      },
    },
    { path: '/pokedex', name: 'pokedex', component: PokemonListVue },
  ],
})

export default router
