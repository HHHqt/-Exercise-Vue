export default {
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
}