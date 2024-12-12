import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import router from './router';
import App from './App.vue';

const vuetify = createVuetify();

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
