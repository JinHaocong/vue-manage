/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 09:04:08
 * @LastEditTime: 2022-08-15 16:12:11
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../api/mock'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/index.less'//引入公共样式

import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)//全局注册ElementUI


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
