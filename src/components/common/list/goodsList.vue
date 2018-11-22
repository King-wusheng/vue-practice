<template>
    <div class="goodslist">
        <template v-if="$route.name==='zhuanchang'">
            <goodsItems :good="good" v-for="good of messages" :key="good.id"></goodsItems>
        </template>
        <template v-else>
            <goodsItems :good="good" v-for="good of messages" :key="good.id"></goodsItems>
        </template>
        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import goodsItems from './goodsItems.vue'
import axios from 'utils/axios.js'
let count = 1
export default{
    props:{
        goodsmess:Array
    },
    data(){
        return{
            messages:[]
        }
    },
    components:{
        goodsItems
    },
    methods:{
    },
    watch:{
        goodsmess(){
           this.messages = this.goodsmess
         
        }
    }
}
</script>

<style lang="stylus">
    .goodslist
        width 100%
        overflow hidden
                           
</style>

