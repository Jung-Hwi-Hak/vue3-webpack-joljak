import { createRouter, createWebHashHistory } from "vue-router";

import Home from './Home'
import About from './About'
import Movie from './Movie'
import Table from './Table'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/table',
      component: Table
    },
  ]
})