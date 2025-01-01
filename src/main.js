import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { VueClipboard } from '@soerenmartius/vue3-clipboard';




// 创建Vue应用实例
const app = createApp(App);

// 使用路由管理模块
app.use(router);
// 使用ElementPlus UI库
app.use(ElementPlus);
// 使用Vue3 Clipboard插件
app.use(VueClipboard);

app.mount('#app');
