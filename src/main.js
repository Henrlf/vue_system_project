import './assets/base.css';
import './assets/components.css';

import {createApp} from 'vue';
import App from './app.vue';
import router from './router/router.js';

const app = createApp(App);
app.use(router);

const url = 'localhost';
const port = '81';

app.config.globalProperties.getSystemUrl = (endepoint = '') => {
    if (endepoint.charAt(0) === '/') {
        endepoint = endepoint.replace(/^./, '');
    }

    let systemUrl = url;

    if (port != undefined) {
        systemUrl += ':' + port;
    }

    return `${systemUrl}/${endepoint}`;
};

app.mount('#app');

