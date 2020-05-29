<template>
    <div class="send">
        <input class="sendinput" @keydown.enter="send" v-model="inputcontent" type="text">
        <button class="sendbtn" @click="send">发送</button>
    </div>
</template>

<script>
    export default {
        props:['sendevent'],
        name: "chatinputcom",
        data(){
            return{
                inputcontent:""
            }
        },
        methods:{
            send:function () {
                this.sendevent(this.inputcontent)
                this.inputcontent = ""
            }
        }
    }
</script>

<style scoped>
    .send{
        display: flex;
    }
    .sendinput{
        width: 592px;
        height: 150px;
        position: absolute;
        bottom: 0;
    }
    .sendbtn{
        width: 85px;
        height: 35px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>