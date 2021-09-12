import categories from "./modules/categories"
import post from "./modules/posts"
import { createStore } from 'vuex'

export default createStore({
  modules: {
    categories,
    post
  }
})
