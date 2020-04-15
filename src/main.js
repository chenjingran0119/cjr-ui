import Vue from 'vue'
import App from './App.vue'

import UId from '../components/index';
Vue.use(UId);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
