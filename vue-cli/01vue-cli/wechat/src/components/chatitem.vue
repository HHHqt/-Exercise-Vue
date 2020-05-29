<template>
    <div class="chatitem">
        <img :style="imgstyle" :src="chatlist.user.headerimg" alt="">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:['chatlist'],
        name: "chatitem",
        data(){
            return{
                imgstyle:{
                    width:"50px",
                    height:"50px"
                }
            }
        }
    }
</script>

<style scoped>
.chatitem{
    display: flex;
}
</style>