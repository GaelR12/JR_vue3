// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import ContactView from './components/ContactView.vue';
// import Services from './views/Services.vue';
// import About from './views/About.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
