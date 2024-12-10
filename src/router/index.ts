import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import FormPage from '@/pages/FormPage.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/form',
        name: 'FormPage',
        component: FormPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
