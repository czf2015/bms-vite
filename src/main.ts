import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
