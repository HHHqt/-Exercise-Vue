export default{
state:{
  name:'zhangsan'
},
mutations:{
  Name(state) {
    state.name = 'lisi'
  }
},
getters:{
  fullname(state) {
    return  state.name + '111111111'
  },
  //调用getters
  fullname02(state,getters) {
    return getters.fullname + '22222'
  },
  //调用别的Store里的state里的元素
  fullname03(state,getters,rostate) {
    return getters.fullname02 + rostate.counter
  }
},
actions:{

},
}