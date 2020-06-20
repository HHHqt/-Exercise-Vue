import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get',
}).then(res => {
  console.log(res);
})
