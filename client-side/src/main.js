import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';

const app = createApp(App);
app.use(VueCookies);
app.use(router).mount('#app')

// console.log('Selamu Dawit')