<template>
    <div class="user">
        <h3>用户列表</h3>
        <hr>
        <ul>
            <li v-for="(item,index) in userlist" :key="'userlist'+index" @click="choose">
                <img :src="item.headerimg">
                <h3>{{item.username}}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['userlist'],
        methods:{
            choose:function (index) {
                //将选择用户的事件触发，发送给到父元素
                this.$emit('use',index)
                console.log('index')
            }
        }
    }
</script>
<!--加上scoped让该style只在该页面使用-->
<style scoped>
    .user{
        width: 200px;
        height: 500px;
        background: aquamarine;
    }
    .user ul li{
        display: flex;
    }
    .user ul li img{
        width: 80px;
        height: 80px;
    }
</style>