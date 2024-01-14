import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import { createRouter, createWebHistory } from 'vue-router'

window.jQuery = jQuery

// const router = createRouter({
//     // history: createWebHistory(),
//     // routes: routes,
//     // linkActiveClass: "active",
// });



const app = createApp(App)
app.use(router)
app.mount('#app')

