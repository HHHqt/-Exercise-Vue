<template>
    <div class="chat">
        <h3>用户：{{activeusername.username}}</h3>
        <hr>
    </div>
</template>
<script>
    export default {
        props:['activeusername']
    }
</script>
<style>
    .chat{
        width: 600px;
        height: 500px;
        background: #dfe8ea;
    }

</style>
