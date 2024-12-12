//  note: all global imports here, mainly for dependencies or files in dir

import './assets/main.css'

import { createApp } from 'vue'
// import { createVuetify } from 'vuetify' dont' do

import App from './App.vue'
import router from './router'
import vuetify from '../plugins/vuetify.js'

// const vuetify = createVuetify() don't do

createApp(App).use(router).use(vuetify).mount('#app')
