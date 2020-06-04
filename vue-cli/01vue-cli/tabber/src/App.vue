<template>
  <div id="app">
    <tab-ber>
      <tab-ber-item path="/Home">
        <img slot="item-icon" src="./assets/img/tabber/首页.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabber/首页active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-ber-item>
      <tab-ber-item path="/Browse">
        <img slot="item-icon" src="./assets/img/tabber/浏览.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabber/浏览(1).svg" alt="">
        <div slot="item-text">浏览</div>
      </tab-ber-item>
      <tab-ber-item path="/Find">
        <img slot="item-icon" src="./assets/img/tabber/发现.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabber/发现(1).svg" alt="">
        <div slot="item-text">发现</div>
      </tab-ber-item>
      <tab-ber-item path="/My">
        <img slot="item-icon" src="./assets/img/tabber/我的.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabber/我的active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-ber-item>
    </tab-ber>
    <router-view></router-view>
  </div>
</template>
<script>
  import TabBer from "./components/tabber/TabBer";
  import TabBerItem from "./components/tabber/TabBerItem";
  export default {
    name:'App',
    components:{
      TabBer,
      TabBerItem
    }
  }
</script>
<style scoped>
@import "assets/css/base.css";
</style>
