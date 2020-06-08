import Vue from 'vue';
import VueRouter from "vue-router";

const Home = () => import('../views/Home/Home')
const Browse = () => import('../views/Browse/Browse')
const Find = () => import('../views/Find/Find')
const My = () => import('../views/My/My')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component:Home
  },
  {
    path: '/Browse',
    component:Browse
  },
  {
    path: '/Find',
    component:Find
  },
  {
    path: '/My',
    component:My
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

//3.导出router
export default router