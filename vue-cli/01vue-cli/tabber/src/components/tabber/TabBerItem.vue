<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
<!--    <img src="../../assets/img/tabber/首页.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBerItem"
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size:13px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*解释vertical-align*/
    /*https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align*/
    vertical-align: middle;
  }
</style>