import Main from '../views/main.vue';
import Dashboard from '../views/dashboard/dashboard.vue';
import Login from '../views/user/login.vue';

export default [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];