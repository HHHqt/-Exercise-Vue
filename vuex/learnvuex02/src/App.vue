<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.namea}}</h2>
    <button @click="addnamea">hcr</button>
    <button @click="addition">+</button>
    <button @click="subtranction">-</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <h2>{{$store.getters.PowerCounter}}</h2>
    <h2>{{$store.getters.twmore}}</h2>
    <h2>{{$store.getters.Age(17)}}</h2>
  </div>
</template>

<script>
  import {INCREMENT} from './store/type'
  export default {
    name: 'App',
    components: {},
    methods: {
      addition() {
        this.$store.commit('INCREMENT')
      },
      subtranction() {
        this.$store.commit('decrement')
      },
      addCounter(count) {
        //  普通的提交封装
        // this.$store.commit('incrementCounter',count)
        //  特殊的提交封装
        this.$store.commit({
          type: 'incrementCounter',
          count
        })
      },
      addnamea() {
        this.$store.commit('addnamea')
      }
    }
  }
</script>

<style>

</style>
