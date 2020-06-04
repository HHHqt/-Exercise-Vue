<template>
  <div id="app">
    <tab-ber>
      <tab-ber-item>
        <img slot="item-icon" src="./assets/img/tabber/首页.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-ber-item>
      <tab-ber-item>
        <img slot="item-icon" src="./assets/img/tabber/浏览.svg" alt="">
        <div slot="item-text">浏览</div>
      </tab-ber-item>
      <tab-ber-item>
        <img slot="item-icon" src="./assets/img/tabber/发现.svg" alt="">
        <div slot="item-text">发现</div>
      </tab-ber-item>
      <tab-ber-item>
        <img slot="item-icon" src="./assets/img/tabber/我的.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-ber-item>
    </tab-ber>
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
