
import Vue from 'vue'
import './styles/custom.scss'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import router from './router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.min.css';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';//导入模组
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);//使用模组
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)//全局注册插件
import store from './store';
if (process.env.NODE_ENV === 'development') {
    require("../mock");
}
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
