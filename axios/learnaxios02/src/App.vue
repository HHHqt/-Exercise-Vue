<template>
  <div id="app">
<!--    <h2>{{message}}</h2>-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      message:''
    }
  },
  created() {
    axios({
      url:'http://123.207.32.32:8000/home/data',
      params:{
        type:'pop',
        page:2
      }
    }).then(res => {
      // console.log(res);
      this.message = res.data;
    })
  }
}
</script>

<style>
</style>
