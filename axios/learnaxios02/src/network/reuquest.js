import axios from 'axios'
// export function request1(config,success,failure) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }

export function request1(config,success,failure) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //拦截器
  //请求拦截
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // },error => {
  //   console.log(errmessage);
  //   return error
  // })
  //响应拦截
  instance.interceptors.response.use(res =>{
    // console.log(res);
    return res.data
  },err => {
    console.log(err);
  })

  //发送真正的网络请求
  return  instance(config)
}