import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../../views/Index.vue'
import Posts from '../../views/Posts.vue'
import CategoryPosts from '../../views/CategoryPosts.vue'
import AddCategory from '../../views/AddCategory.vue'
import AddPosts from '../../views/AddPosts.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },

  {
    path: '/posts/:category',
    name: 'posts',
    component: CategoryPosts
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
  },
  {
    path: '/post/add',
    name: 'addPost',
    component: AddPosts
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
