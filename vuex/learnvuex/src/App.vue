<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.content}}</h2>
    <button @click="add">++</button>
    <button @click="sub">--</button>
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
  },
  methods:{
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
</style>
