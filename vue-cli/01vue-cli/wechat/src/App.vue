<template>
  <div id="app">
    <chatcom></chatcom>
    <userlist></userlist>
  </div>
</template>

<script>

import userlist from './components/userlist'
import chatcom from './components/chatcom'
export default {
  name: 'App',
  components: {
    chatcom,userlist
  }
}
</script>

<style>

</style>
