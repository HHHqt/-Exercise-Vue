<template>
  <div id="app">
    <router-link to="/Home" tag="button">首页</router-link>
    <router-link to="/About" tag="button">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  }
};
</script>

<style>

</style>
