import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/output.css';
import '@/assets/libs/@iconscout/unicons/css/line.css';
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import  '@/assets/libs/animate.css/animate.min.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import VueSmoothScroll from 'vue3-smooth-scroll'
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router' 

const app = createApp(App)
app.use(VueDatePicker)
app.use(VueSmoothScroll)
app.use(router)
app.mount('#app')
