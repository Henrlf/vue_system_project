import {createRouter, createWebHistory} from 'vue-router';
import login from '../views/login.vue';
// import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: login,
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About,
    // },
];

const router = createRouter({
    history: createWebHistory(), // Modo de histórico
    routes,
});

export default router;