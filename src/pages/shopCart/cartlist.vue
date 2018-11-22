<template>
    <div class="cartbox">
        <div v-if="data==''">
            <div class="ajaxHtml">
                <div class="my-bag" id="goodsList">
                    <div class="item-empty">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png">
                        <div class="b-title">看到喜欢的就带回家吧</div>
                        <router-link tag="div" to="/home/goods" class="btn bc">今日推荐</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="item_cart act_efficacy" v-else v-for="(mess,index) of data" :key="index" >
            <div class="item_head_box">
                <router-link tag="div" :to="{name:'/brand',query:{shop_id:mess.shop_id,list:0}}" class="item_head">
                    <!-- <div class="head_type" v-if="count[index]">
                        <svg t="1541851943644" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2136" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M864 128 545.28 128C534.4 126.08 522.88 129.28 514.56 137.6l-441.6 441.6C65.28 586.88 62.72 597.12 63.36 606.72 62.72 616.96 65.28 627.2 72.96 634.88l313.6 313.6c7.68 7.68 17.92 10.88 27.52 9.6 10.24 1.28 21.12-1.92 28.8-9.6l441.6-441.6c3.84-3.84 6.4-8.96 8.32-14.08C894.72 488.96 896 484.48 896 480l0-320C896 142.08 881.92 128 864 128zM832 460.16 414.72 876.8 144.64 606.72 560 192 832 192 832 460.16zM640 448c35.2 0 64-28.8 64-64 0-35.2-28.8-64-64-64C604.8 320 576 348.8 576 384 576 419.2 604.8 448 640 448z" p-id="2137" fill="#666"></path></svg>    
                        <span v-if="count[index].coupon">{{ count[index].coupon[0].content  }}</span>
                    </div> -->
                    <div class="head_type" >
                        <svg t="1542252274787" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2015" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M952.786158 352.800941c0-0.516042-0.172014-0.860071-0.172014-1.376113-0.344028-1.892155-0.860071-3.612296-1.548127-5.332437L875.895851 159.285066c-13.073072-38.703175-50.22812-62.441122-93.919704-62.613136L255.440954 96.67193c-44.207626 0-78.610449 23.565933-90.995464 60.720981L83.770872 347.984546c-0.344028 1.204099-0.860071 2.752226-1.204099 4.472367-5.84848 18.061482-8.77272 36.466991-8.77272 55.044515 0 65.193348 35.778935 124.71023 93.231648 155.328742 0 0 0 0 0 0s0 0 0 0l0 0c0 0 0 0 0 0 23.565933 12.55703 51.432219 18.921552 82.738787 18.921552 52.464304-0.172014 101.144297-23.221905 134.34302-62.78515 33.026709 39.219217 81.19066 62.097094 133.654964 62.441122 51.948261-0.344028 100.112212-23.393919 132.966907-62.613136 33.198723 39.563245 81.878717 62.441122 134.687049 62.441122 31.994625-0.172014 60.204939-6.880564 84.1149-19.953637 56.592642-30.96254 91.683521-90.135394 91.683521-154.640685C961.386864 388.235847 958.29061 369.658324 952.786158 352.800941zM839.084831 505.377457c-14.449185 7.912649-32.510667 12.040988-53.668402 12.040988-39.047203 0-74.48211-19.781623-95.295817-53.324374-1.548127-3.096254-3.956325-8.428691-8.600706-13.417101-5.332437-5.84848-14.793214-12.901058-30.618512-12.901058-12.729044 0-24.25399 5.160423-30.790526 13.245087-4.300353 4.816395-6.70855 9.63279-8.428691 13.245087-20.469679 33.198723-55.732572 53.15236-93.919704 53.324374-38.703175-0.172014-73.966068-20.125651-94.607761-53.496388-1.376113-2.92424-3.78431-7.912649-7.568621-12.040988-14.965228-17.889467-48.679993-17.029397-61.753066-1.376113-4.816395 5.332437-7.396607 10.664875-8.944734 14.277171-20.641693 33.198723-56.248614 52.980346-94.951789 53.15236-20.641693 0-38.359147-3.956325-52.636318-11.524945l0 0c0 0 0 0 0 0-36.639006-19.437594-59.344868-57.452713-59.344868-98.908114 0-12.213002 2.064169-24.598018 6.192508-36.639006 0.344028-0.860071 0.516042-1.892155 0.688056-2.752226l79.470519-187.839409c1.548127-4.816395 6.536536-19.437594 31.306568-19.437594l526.707206 0c10.148833 0.688056 27.694272 2.408198 33.88678 20.641693l74.310096 185.259197c0.344028 1.376113 0.688056 2.580212 1.032085 3.612296 4.128339 12.040988 6.192508 24.25399 6.192508 36.466991C897.397615 447.924744 875.03578 485.595834 839.084831 505.377457z" p-id="2016" fill="#8a8a8a"></path><path d="M862.994793 607.897867c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 174.594322c0 9.976818-8.084663 18.061482-18.061482 18.061482l-602.049387 0.344028c-9.976818 0-18.061482-8.084663-18.061482-17.889467l-0.172014-171.498068c0-17.717453-14.449185-31.994625-31.994625-31.994625 0 0 0 0 0 0-17.717453 0-31.994625 14.449185-31.994625 31.994625l0.172014 171.498068c0 45.067697 36.81102 81.878717 82.050731 81.878717l602.221401-0.344028c45.067697-0.172014 81.878717-36.81102 81.878717-82.050731l0-174.594322C894.989417 622.347052 880.712246 607.897867 862.994793 607.897867z" p-id="2017" fill="#8a8a8a"></path><path d="M768.043004 383.935495 255.956996 383.935495c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l511.913993 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C800.037628 369.658324 785.588443 383.935495 768.043004 383.935495z" p-id="2018" fill="#8a8a8a"></path></svg>
                        <span>{{ data[index].store_name }}</span>
                    </div>
                    <div class="head_action"></div>
                </router-link>
            </div>
            <div class="item_body"  >
                <!-- <div class="item_group" v-if="count[index].coupon&&count[index]&&count[index]&&count[index]!=''">
                    <div class="tag">任选</div>
                    <div class="msg">{{ count[index].coupon[0].title }}</div>
                    <div class="action">
                        <span>{{ count[index].coupon[0].jump_text }}</span>
                        <svg t="1541855190944" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2068" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M801.548285 510.271032L301.254151 1010.360574c-18.242732 18.242732-47.73799 18.106338-65.844327-0.306887a47.226511 47.226511 0 0 1 0.272788-66.389904l433.358652-433.154061L235.784908 80.356335A47.192413 47.192413 0 0 1 235.307528 13.966431 46.30585 46.30585 0 0 1 301.151856 13.454952l500.396429 496.81608z" fill="#ff464e" p-id="2069"></path></svg>
                    </div>
                </div> -->
                <ul class="good_list">
                    <li class="good_item" id="goodsId91956140">
                        <div class="good_radio">
                            <input type="checkbox" @click="clickBtn(mess,index)" >
                        </div>
                        <div class="good_info clear">
                            <div class="pic">
                                <img :src="mess.av_origin_zpic">
                            </div>
                            <div class="info_box">
                                <router-link tag="div" :to="{name: '/shop',query:{ good_id : mess.good_id}}"   class="info_first clear">
                                    <p class="title">
                                        {{mess.shop_title}}
                                    </p>
                                </router-link>
                                <div class="info_second clear">
                                    <p class="type">
                                        {{mess.av_zvalue}}   {{mess.av_fvalue}}
                                    </p>
                                </div>

                                <div class="info_third clear">
                                    <p class="price fl">
                                        <span style="color:#FF464E;" class="vip-price">¥{{mess.sprice}}</span>
                                        <span style="text-decoration:line-through;color:#999999;" class="vip-price">¥{{mess.price}}</span>
                                    </p>
                                    <p class="num fr">
                                        <span class="changeNum">
                                            <button :disabled="mess.buy_count==1" @click="reduce(index)" class="decrease no">-</button>
                                            <input class="amount" type="text" :value="mess.buy_count"  readonly="true" >
                                            <button @click="add(index)" class="increase">+</button>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapState, mapGetters ,mapMutations } from 'vuex'
import axios from 'utils/axios.js'
import _ from 'lodash'
    export default{
        data(){
            return {
                data:[],
                quantity:'',
                count:[],
                btn:true,
                arr:[]
            }
        },
        props:{
            goodsArr:Array
        },
        computed : {
            ...mapState('cart',{
                message:'items'                
            }),
            ...mapState('cart',{
                discount:'discount'                
            })
        },
        methods:{
            reduce(index){
                this.$store.commit('cart/reduce',index)
            },
            add(index){
                 this.$store.commit('cart/add',index)
            },
            clickBtn(mess,index){
                mess.bool = mess.bool?false:true
                this.message[index].bool = mess.bool
                this.message[index].index = index
                this.$store.commit('cart/remove',mess)
                
                // this.btn = this.btn?false:true
                // this.arr.push({bool:this.btn,id:id,index:index})
                // this.$emit('delmess',this.arr)
            }
        },
        beforeCreate() {
            console.log(this.message)
        },
        watch:{
            goodsArr(){
                this.data = this.message
            },
            data(){
                this.data = this.data
            }
        },
        async mounted() {
            this.data = this.message
            // console.log(this.data)
            // let mess = await axios({
            //     method:'get',
            //     url:"/shopcart/lists?goods_info=%5B%7B%22goods_id%22%3A%2293855283%22%2C%22sku_id%22%3A%221526608535%22%2C%22num%22%3A1%7D%5D&zy_ids=c4_l4&buyMemCardParam=-1"
            //     // url:"/shopcart/lists?goods_info=[{'goods_id':93855283,'sku_id':1526608535,'num':1}]&zy_ids=c4_l4&buyMemCardParam=-1"
            // })
            this.count.push(this.discount) 
            console.log(this.data)
            // console.log(this.count)
        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'

    
.item-empty
    width 100%
    height 2.33rem
    margin .25rem 0
    display flex 
    flex-direction column
    align-items center
    img 
        width 1.4rem
        height 1.4rem
    .b-title
        margin-bottom .14rem
        font-size .16rem
        text-align center
    .btn 
        width 1.38rem
        height .4rem
        border .01rem,#ff464e
        text-align center
        line-height .4rem
        font-size .16rem
        color #ff464e
        

.item_cart
    margin-top .2rem
.item_cart:nth-child(1)
    margin-top 0
.item_head_box
    width 100%
    height .44rem
    background #fff
    border .01rem 0 , #ebebeb
    .item_head
        width 100%
        height 100%
        padding 0 .14rem
        display flex
        align-items center
        .head_radio
            flex 62
        .head_type
            flex 508
            display flex
            align-items center
            color #666
            svg 
                margin-right .08rem
        .head_action
            flex 124
.item_body
    width 100%
    overflow hidden        
    display flex
    flex-direction column
    background #fff
    .item_group
        width 100%
        height .36rem
        padding 0 .14rem 0 .52rem
        display flex
        align-items center
        .tag
            flex 54 
            margin-right .06rem
            font-size .1rem
            border .01rem,#ff464e 
            color #ff464e
            text-align center
        .msg
            flex 428 
            font-size .12rem
        .action
            flex 124
            color #ff464e
            font-size .12rem
            display flex 
            align-items center
            svg 
                margin-left .05rem
.good_list
    width 100%
    overflow hidden
    
    .good_item
        width 100%
        height 1.23rem
        padding-left .14rem
        display flex
        .good_radio
            flex 62
            line-height 1.23rem
        .good_info
            flex 660
            padding .16rem .14rem .16rem 0
            display flex
            .pic
                width .9rem 
                height .9rem
                margin-right .12rem
                flex 180
                img 
                    width 100%
                    height 100%
            .info_box
                flex 428
                position relative
                .info_first
                    color #333
                .info_second 
                    color #bbbbbb
                .info_third
                    padding-top .2rem
                    position absolute
                    bottom 0
                    display flex
                    .price
                        margin-top .14rem
                        color #666
                        font-size .12rem
                        .vip-price
                            margin-right .1rem
                    .num
                        margin-top .09rem
                        position absolute 
                        right 0
                        .amount
                            width .3rem
                            height .2rem
                            text-align center
                            margin 0 .1rem
                            border-left 0
                            border-right 0
                            border-top 0
                            border-bottom 0
                        .decrease,.increase 
                            width .2rem
                            height .2rem
                            background #f7f7f7
                            font-size .12rem
                            color black
                            text-align center
                            border-left 0
                            border-right 0
                            border-top 0
                            border-bottom 0
                        

</style>
