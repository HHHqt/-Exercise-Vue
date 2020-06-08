<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBerItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'pink'
      }
    },
    data(){
      return{
        // isActive: true
      }
    },
    computed:{
      isActive() {
        //indexOf()  ->前面的this.$route.path等于indexOf(this.path)时！==-1,不相同时==-1
        //如果要检索的字符串值没有出现，则该方法返回 -1。
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick () {
        this.$router.replace(this.path)
      }
    }
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
  .active{
    color: pink;
  }
</style>