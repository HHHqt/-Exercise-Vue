//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../components/Home";
import About from "../components/About";
//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const routes = [
  {
    path:'/Home',
    component:Home
  },
  {
    path: '/About',
    component: About
  }
]
const router = new VueRouter(
    //配置路由和组件之间的应用关系
    routes
)