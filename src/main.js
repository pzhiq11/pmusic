import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// // import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.prototype.$bus=new Vue();
// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper, )

createApp(App).use(store).use(router).mount('#app')
