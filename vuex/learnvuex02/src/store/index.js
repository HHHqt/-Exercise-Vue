import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import modulesA from "./modules/modulesA";
//安装插件
Vue.use(Vuex)
//创建对象
const state ={
  counter:0,
  students:[
    {id:1,name:'hqt',age:22},
    {id:2,name:'hcr',age:18},
    {id:3,name:'syq',age:17},
  ],
  namea: {
    name:'hcr',
    age:21,
  },
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a:modulesA,
  }
})
//对象的解构
const object = {
  name:'hqt',
  age: 22,
  address:'hz',
  height:1.90
}
const {name,age,height} = object;