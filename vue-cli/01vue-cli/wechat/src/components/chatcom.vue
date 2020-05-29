<template>
    <div class="chat">
        <h3>用户：{{activeusername.username}}</h3>
        <hr>
        <div class="chatlist">
                <chatitem v-for="(item,index) in chatlist" :chatlist="item" :key="index">
                    {{item.chatcontent}}
                </chatitem>
        </div>
        <chatinputcom :sendevent="sendevent"></chatinputcom>
    </div>

</template>
<script>
    import chatinputcom from "./chatinputcom";
    import chatitem from "./chatitem";
    export default {
        props:['activeusername'],
        components:{
            chatinputcom,
            chatitem
        },
        data(){
            return{
                chatlist:[
                    {
                        user:{
                            username:'小白',
                            headerimg:require('../assets/下载 (1).jpg'),
                        },
                        chatcontent:'你好!'
                    }
                ]
            }
        },
        methods:{
            sendevent:function (value) {
                this.chatlist.push(
                    {
                        user:{
                            username:'小白',
                            headerimg:require('../assets/下载 (1).jpg'),
                        },
                        chatcontent:value
                    }
                )
                this.chatlist.push(
                    {
                        user:this.$root.$children[0].activeusername,
                        chatcontent:new Date()
                    }
                )
            }
        }
    }
</script>
<style>
    .chat{
        width: 600px;
        height: 500px;
        background: #dfe8ea;
    }

</style>
