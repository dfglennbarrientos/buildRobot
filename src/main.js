import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


 createApp(App).use(router)
 .mount('#app');

// const app = createApp(App).mount('#app');
// app.component('HomePage',HomePage);