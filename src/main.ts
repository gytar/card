import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import axios from "axios";
import VueAxios from 'vue-axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faDownload, faHouse, faClose, faBuilding, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faAngleDown, faDownload, faHouse, faClose, faBuilding, faLocationDot, faEnvelope, faGithub, faLinkedin);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
