import { createApp } from 'vue'
import App from './App.vue'
import _ from 'lodash';
import router from './libraries/router'
import store from './libraries/store'
import './libraries/settings'
import $ from 'jquery'
createApp(App).use($).use(store).use(_).use(router).mount('#app')
