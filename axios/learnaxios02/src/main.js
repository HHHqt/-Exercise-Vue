import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get',
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对gei请求的参数拼接
//   params:{
//     type:'pop',
//     page:1,
//   }
// }).then(res => {
//   console.log(res);
// })

//使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios.get('/home/multidata'),
//                   axios.get('/home/data'),
//   {params:{
//     type:'pop',
//     page:3
//     }}]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

//创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url:'/home/data',
//   param:{
//     type:'pop',
//     page:3
//   }
// }).then(res => {
//   console.log(res);
// })

//封装request模块
import {request1} from "./network/reuquest";
request1({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).then(err => {
  console.log(err);
})
