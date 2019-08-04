import Vue from 'vue'
import moment from 'moment' 
Object.defineProperty(Vue.prototype,'$moment',{value:moment});

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
