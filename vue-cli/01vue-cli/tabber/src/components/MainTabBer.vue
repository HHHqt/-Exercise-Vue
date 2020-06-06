<template>
  <tab-ber>
    <tab-ber-item path="/Home" activeColor="blue">
<!--      给路径起别名，默认@为src ,在vue.config.js中配置，在src中引用需要加~符号,在import中不需要加符号-->
      <img slot="item-icon" src="~assets/img/tabber/首页.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/首页active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-ber-item>
    <tab-ber-item path="/Browse" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabber/浏览.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/浏览(1).svg" alt="">
      <div slot="item-text">浏览</div>
    </tab-ber-item>
    <tab-ber-item path="/Find" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabber/发现.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/发现(1).svg" alt="">
      <div slot="item-text">发现</div>
    </tab-ber-item>
    <tab-ber-item path="/My" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabber/我的.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabber/我的active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-ber-item>
  </tab-ber>
</template>

<script>
  import TabBer from "components/tabber/TabBer";
  import TabBerItem from "components/tabber/TabBerItem";
  export default {
    name: "MainTabBer",
    components:{
      TabBer,
      TabBerItem
    }
  }
</script>

<style scoped>

</style>