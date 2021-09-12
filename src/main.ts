import { createApp } from 'vue'
import App from './App.vue'
import router from './libraries/router'
import store from './libraries/store'
import './libraries/settings'
import $ from 'jquery'
createApp(App).use($).use(store).use(router).mount('#app')
