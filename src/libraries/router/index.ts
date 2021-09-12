import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../../views/Index.vue'
import Posts from '../../views/Posts.vue'
import User from '../../views/User.vue'
import AddCategory from '../../views/AddCategory.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },

  {
    path: '/posts/',
    name: 'Posts',
    component: () => import('../../views/Posts.vue')

  },
  {
    path: '/posts/:category',
    name: 'posts',
    component: User
  },
  {
    path: '/posts/category',
    name: 'PostsIndex',
    component: () => import('../../views/Index.vue')

  },
  {
    path: '/category/:query',
    name: 'addcategory',
    component: AddCategory
  },
  {
    path: '/category/:query/:category/:id',
    name: 'do',
    component: AddCategory
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
