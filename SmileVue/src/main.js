// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/base.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import filters  from './filter/'
import api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css//swiper.css'
import {Button, Row, Col,Swipe,SwipeItem,Lazyload,List} from 'vant'
import alert from './components/alert'
import loading from './components/loading/'
import store from './store'
require('./assets/util/vconsole.js')
Vue.prototype.$http = api;
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(VueAwesomeSwiper, /* { default global options } */).use(List).use(alert).use(loading)



// 使用插件的形式开发alert弹窗全局组件

//注入全局过滤器
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key])
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
