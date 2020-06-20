import {INCREMENT} from './type'
export default {
  //通常情况下mutations都是同步的
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
    state.namea.name = 'hqt'
    // Vue.set(state.namea,'id','1')
    // Vue.delete(state.namea,'age')
    //非响应式
    // state.namea['id'] = '1'
    // delete state.namea.age
  }
}