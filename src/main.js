import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js' //데이터 담긴 중앙체제

createApp(App).use(router).use(store).mount('#app')