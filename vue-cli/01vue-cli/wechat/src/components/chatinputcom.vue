<template>
    <div>
        <input @keydown.enter="send" v-model="inputcontent" type="text">
        <button @click="send">发送</button>
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

</style>