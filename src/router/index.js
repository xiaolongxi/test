import Vue from 'vue'
import Router from 'vue-router'

import Blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    }
  ]
})
