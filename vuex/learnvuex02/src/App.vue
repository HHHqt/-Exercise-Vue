<template>
  <div id="app">
<h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtranction">-</button>
<h2>{{$store.getters.PowerCounter}}</h2>
<h2>{{$store.getters.twmore}}</h2>
    <h2>{{$store.getters.Age(17)}}</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    addition:function () {
      this.$store.commit('increment')
    },
    subtranction: function () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
