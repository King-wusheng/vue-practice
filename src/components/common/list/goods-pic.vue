<template>
       <img :src="item.pic">
</template>
<script>
    export default{
        props:{
            item:Object
        }
    }
</script>
<style lang="stylus">

        img
            width:100%
            height 1.45rem
</style>