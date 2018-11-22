<template>
    <router-view></router-view>  
</template>

<script>
  import '@/assets/styles/reset.styl'
  import home from './pages/Home.vue'
  import shopmess from 'pages/goodsShow/shopmess.vue'
  import shopCart from 'pages/shopCart/shopCart.vue'

  export default {
    components:{
      home,
      shopmess,
      shopCart
    }
  }
  
</script>

<style lang="stylus" scoped>

</style>
