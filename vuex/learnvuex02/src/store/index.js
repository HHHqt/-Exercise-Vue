import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存放状态
    counter:0,
    students:[
      {id:1,name:'hqt',age:22},
      {id:2,name:'hcr',age:18},
      {id:3,name:'syq',age:17},
    ],
    namea: {
      name:'hcr',age:21
    },
  },
  mutations: {
    //方法
    INCREMENT(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    //负载
    incrementCounter(state,payload) {
      //普通的
      // state.counter += count
      //特殊的
      state.counter += payload.count
      // console.log(count);
    },
    addnamea(state) {
      //响应式
      Vue.set(state.namea,'id','1')
      Vue.delete(state.namea,'age')
      //非响应式
      // state.namea['id'] = '1'
      // delete state.namea.age
    }
  },
  getters: {
    //类似与computer属性
    PowerCounter(state) {
      return state.counter * state.counter
    },
    twmore(state) {
      return state.students.filter(stu => stu.age > 20)
    },
    Age(state) {
      return function (age) {
        return state.students.filter(stu => stu.age > age)
      }
    }
  },
  actions: {
  //  划分模块，数据保持

  },
  modules: {
  }
})
