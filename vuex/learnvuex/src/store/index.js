import Vue from "vue";
import Vuex from 'vuex';
//1.安装插件
Vue.use(Vuex)
//2.创建对象
const store = new Vuex.Store({
  state:{
    //保持共享状态
    content:'0'
  },
  mutations:{
  //方法
    increment(state) {
      state.content++
    },
    decrement(state) {
      state.content--
    }
  },
  actions:{
  //异步操作
  },
  getters:{
  //类似与组件的计算属性
  },
  modules:{
  //划分模块，数据保持
  }
})
//3.导出store独享
export default store