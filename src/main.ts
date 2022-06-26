import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});


createApp(App)

.use(router)

.mount("#app");
