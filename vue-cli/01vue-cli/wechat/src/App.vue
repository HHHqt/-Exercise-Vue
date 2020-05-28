<template>
  <div id="app">
    <div class="content">
      <chatcom :activeusername="activeusername"></chatcom>
      <userlist @use='name' :userlist="userlist"></userlist>
    </div>

  </div>
</template>

<script>

import userlist from './components/userlist'
import chatcom from './components/chatcom'
export default {
  name: 'App',
  components: {
    chatcom,userlist
  },
  data(){
    return{
      msg:'聊天',
      userlist:[
        {
          username:"小米",
          headerimg:require('./assets/下载.jpg'),
        },
        {
          username:"小黑",
          headerimg:require('./assets/下载.png'),
        },
        {
          username:"小白",
          headerimg:require('./assets/下载 (1).jpg'),
        },
        {
          username:"小兰",
          headerimg:require('./assets/下载 (2).jpg'),
        }
      ],
      activeusername:
        {
          username:"小米",
          headerimg:require('./assets/下载.jpg'),
        },
    }
  },
  methods:{
    name:function (index) {
      this.activeusername = this.userlist[index]
      // console.log(this.userlist[index])
    }
  }
}
</script>
<style>
  .content{
    width: 800px;
    height: 500px;
    display: flex;
    border: solid 1px black;
    margin: 0 auto;
  }
</style>

