import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import Preview from './pages/Preview.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/preview', component: Preview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;