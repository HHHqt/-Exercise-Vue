export default {
  //  划分模块，数据保持
  //  异步操作
  actionsUpdate(context) {
    setTimeout(() => {
      context.commit('addnamea')
    },2000)
  }

}