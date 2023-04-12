import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import * as Echarts from 'echarts'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from '@/router'

import '@/icons' // icon
import '@/permission' // permission control

import axios from 'axios'
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.prototype.echarts = Echarts
Vue.use(Echarts)
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
