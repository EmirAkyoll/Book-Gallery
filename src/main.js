import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js';
import "@/assets/main.scss";

const app = createApp(App);
app.use(store);
app.mount('#app');