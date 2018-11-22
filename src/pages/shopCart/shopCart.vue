<template>
    <div class="all">
        <div class="cart">
            <div class="cart-scroll">
                <header class="head" id="head">
                    <div class="fixtop">
                        <span id="t-index">购物车</span>
                        <span v-if="!redact" id="t-user"  @click="redactClick">编辑</span>
                        <span v-if="redact" id="t-user" @click="redactClick">完成</span>
                    </div>
                </header>
                <div>
                    <cartList v-on:delmess="delmess" :goodsArr="message"></cartList>
                </div>
            </div>
        </div>
        <div class="bag-total">
            <div class="sel-all">
                <input type="checkbox">全选
            </div>
            <div class="bag-money" v-show="!redact">
                <p class="count">
                    <span class="zje">合计<em class="p" id="myBagTotal">￥0.00</em>
                    </span>
                    <br>
                    <span class="s">总额:
                        <em id="save">￥0.00</em>&nbsp;立减:
                        <em id="save">0.00</em>
                    </span>
                </p>
            </div>
            <span v-show="!redact" class="go_pay fr">去结算</span>
            <span v-show="redact" @click="del" class="del_good hide fr">删除</span>
            <span v-show="redact" class="move_good hide fr">移入收藏夹</span>
        </div>
    </div>
</template>


<script>
import { Checklist } from 'mint-ui';
import cartList from './cartlist.vue'
import { mapState, mapGetters } from 'vuex'
import BScroll from 'better-scroll'
import _ from 'lodash'
    export default{
        data(){
            return{
                redact : false,
                delmessage:[]
            }
        },
        components:{
            cartList
        },
        computed : {
            ...mapState('cart',{
                message:'items'                
            })
    
        },
        beforeCreate() {
            
        },
        methods:{
            redactClick(){
                this.redact = !this.redact
            },
            delmess(mess){
                this.delmessage = mess
                console.log(this.delmessage)
            },
            del(){
                this.$store.commit('cart/removeit')
            }
        },
        mounted() {
            let bScroll = new BScroll('.cart',{
                click:true,
                probeType:1,
                pullUpLoad: {
                    threshold: 50
                }
            })
        },
    }
</script>

<style lang="stylus" scoped>
.all 
    height 100%
    overflow hidden
    display flex
    flex-direction column
    justify-content space-between
    .cart 
        flex 573
    .bag-total 
        flex 45
.cart
    overflow hidden
    background #f4f4f8
.head
    width 100%
    height .44rem
    background #fff
    .fixtop
        width 100%
        height 100%
        position relative
        #t-index
            font-size .18rem
            display block
            height 100%
            width 100%
            padding 0 .36rem
            text-align center
            line-height .44rem
        #t-user
            font-size .15rem
            position absolute
            right .14rem
            top .1rem
.bag-total
    width 100%
    height .49rem
    background #ffffff
    display flex
    align-items center
    .sel-all
        text-align center
        font-size .16rem
        width .94rem
    .bag-money
        flex 1
        .count
            font-size .14rem
            .zje
                float right    
                margin-right .1rem
                .p
                    color #ff464e
            .s
                float right
                margin-right .1rem
                font-size .1rem
                color #999
    .fr
        width 1.12rem
        background #ff464e
        text-align center
        height 100%
        line-height .49rem
        color #ffffff
        font-size .18rem
        float right
    .del_good
        margin-left .57rem
</style>
