<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.content}}</h2>
    <button @click="$store.state.content++">++</button>
    <button @click="$store.state.content--">--</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  data () {
    return {
      message:'hello world',
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
</style>
