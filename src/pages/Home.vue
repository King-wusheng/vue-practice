<template>
    <div class="home_page">
       
        <main>
            <router-view></router-view>
        </main>
        <TabBar></TabBar>
    </div>
</template>

<style lang="stylus" scoped>
    

    .home_page
        height:100%
        display flex
        flex-direction column
        main
            flex 1
            overflow scroll
</style>

<script>
    import Header from 'components/layout/Header'
    import TabBar from 'components/layout/TabBar'
    import Goods from 'pages/goods/Goods'


    

    export default{
        components:{
            Header,
            TabBar,
        }
        
    }
</script>