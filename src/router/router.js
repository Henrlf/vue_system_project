import {createRouter, createWebHistory} from 'vue-router';
import main from '../router/main.js';
// import About from '../views/About.vue';

const routes = [
    ...main,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;