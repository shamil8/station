import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import './assets/styles/style.scss'

const ElementUI = require('element-ui');

Vue.config.productionTip = false
// configure language
locale.use(lang);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
