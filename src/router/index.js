import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/lognin',
    name: 'lognIn',

    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',

    component: () => import('../views/Register.vue'),
  },
  {
    path: '/products',
    name: 'products',

    component: () => import('../views/Products.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
