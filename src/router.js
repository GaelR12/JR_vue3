// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import ServicesView from './components/ServicesView.vue';
import ContactView from './components/ContactView.vue';
import AboutView from './components/AboutView.vue';
// import Services from './views/Services.vue';
// import About from './views/About.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact', component: ContactView },
  { path: '/services', component: ServicesView},
  { path: '/about', component: AboutView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
