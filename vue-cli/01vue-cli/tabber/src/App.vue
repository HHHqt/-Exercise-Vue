<template>
  <div id="app">
    <main-tab-ber></main-tab-ber>
    <router-view></router-view>
  </div>
</template>
<script>
  import MainTabBer from "./components/MainTabBer";
  export default {
    name:'App',
    components:{
      MainTabBer
    }
  }
</script>
<style scoped>
@import "assets/css/base.css";
</style>
