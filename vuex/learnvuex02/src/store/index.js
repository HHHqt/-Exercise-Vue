import Vue from 'vue'
import Vuex from 'vuex'

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
    age:'',
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
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
