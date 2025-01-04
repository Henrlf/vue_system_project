import './assets/base.css';
import './assets/components.css';

import {createApp} from 'vue';
import App from './views/login.vue';
import router from './router/router.js';

createApp(App).use(router).mount('#app');
