<template>
     <div id="good-scroll" class="main">
        <div class="sm">
            <div class="sousuo">
                <div>
                    <img src="http://s2.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="">
                    <router-link to="/sc" tag="div" ></router-link>
                    <svg t="1541248522133" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="27"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" p-id="2305" fill="#bfbfbf"></path></svg>
                </div>
                <router-link :to="{name:'fenlei',query:{listnum:0}}" tag="div">
                    <svg t="1541320602921" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M455.212 532.79c56.378 110.245 191.453 153.914 301.699 97.536 110.246-56.378 153.914-191.454 97.536-301.7-56.378-110.245-191.453-153.914-301.699-97.536-110.246 56.378-153.914 191.454-97.536 301.7z m115.372-266.821c90.983-46.528 202.458-10.49 248.985 80.494 46.528 90.983 10.489 202.457-80.494 248.985-90.983 46.527-202.458 10.488-248.985-80.495-46.528-90.983-10.489-202.458 80.494-248.984z m308.508 535.75L815.74 677.836c-6.982-13.654-23.711-19.062-37.366-12.08l-6.445 3.296c-13.654 6.982-19.062 23.712-12.08 37.366L823.2 830.3c6.983 13.654 23.713 19.063 37.367 12.08l6.445-3.295c13.654-6.984 19.063-23.713 12.08-37.367z m-744.79-550.117h302.591c12.177 0 22.048-9.87 22.048-22.047s-9.871-22.047-22.048-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047s9.87 22.047 22.047 22.047z m0 197.711h224.027c12.176 0 22.047-9.87 22.047-22.047s-9.87-22.047-22.047-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047s9.87 22.047 22.047 22.047z m0 197.711H423.29c12.176 0 22.047-9.87 22.047-22.047 0-12.176-9.871-22.047-22.047-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047-0.001 12.175 9.87 22.047 22.047 22.047zM729.027 802.43H132.512c-11.189 0-20.258 9.07-20.258 20.258s9.07 20.258 20.258 20.258h596.515c11.189 0 20.258-9.07 20.258-20.258s-9.07-20.258-20.258-20.258z" fill="#bfbfbf" p-id="2338"></path></svg>
                </router-link>
            </div>
            <div class="swiper-container" ref="carouls">
                <!-- <div class="swiper-wrapper">
                     <img  v-for="item of list" :key="item.id" :src="item.pic" class="swiper-slide">
                </div> -->
                <img src="https://goods4.juancdn.com/jas/181114/7/8/5beb7d4333b08975cc034d6c_1080x418.jpg" alt="">
            </div>
            
            <div class="sc-irbamj">
                <img v-for="(img,index) of imgmess" :key="index" :src="img.child[0].pic" alt="">
            </div>
            <div>
                <img src="https://s2.juancdn.com/jas/181113/a/2/5bea9fd433b08972265fb588_1080x360.gif" alt="">
            </div>
            <div class="qykHL">
                <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" alt="">
            </div>
            <div class="listall">
                <div class="listnav">
                    <ul>
                        <router-link tag="li" to="/home/goods/zhuanchang" active-class="active">精选专场</router-link>
                        <router-link tag="li" to="/home/goods/danpin" active-class="active">精选单品</router-link>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
        
</template>

<script>
// import swiper from  'node_modules/swiper/dist/js/swiper.min.js'
// import 'styles/border.styl'
import GoodsPic from 'list/goods-pic.vue'
import BScroll from 'better-scroll'
import axios from 'utils/axios.js'
// import 'styles/border.styl'
// import  'styles/reset.styl'
import { Indicator } from 'mint-ui';
import Swiper from 'swiper';
let count =1
export default{
    data(){
        return{
            list:[],
            newmess:[],
            imgmess:[],
            imgmess1:[],
            imgmess2:[],
            imgmess3:[],
            imgmess4:[],
        }
    },
    components:{
        GoodsPic
    },
    async beforeCreate() {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        
        var mySwiper = new Swiper('.swiper-container', {
            effect : 'fade',
        });
        const mess = await axios({
            method:'get',
            url:'/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe'
        })
        // console.log(mess)
        this.imgmess = mess.adsRes.block[0].multi_block[0].data
        // console.log(this.imgmess)
        // console.log(mess.adsRes.slide_ads.config.slide)
        this.list = mess.adsRes.slide_ads.config.slide
        let bScroll = new BScroll('.main',{
            click:true,
            probeType:1,
            pullUpLoad: {
                threshold: 50
            }
        })
        this.$nextTick(() => {
            bScroll.refresh()
            count++
            bScroll.finishPullUp()
        })
    }
}


</script>

<style lang="stylus" scoped>
@import '~node_modules/swiper/dist/css/swiper.min.css'

.qykHL
    width 100%
    height .48rem
    margin .1rem 0
    img 
        width 100%
        height 100%

.sc-iRbamj
    width 100%
    height 1.09rem
    display flex
    img     
        width 50%
        height 100%
.sc-iRbamj1
    width 100%
    height 1.09rem
    display flex
    img     
        width 50%
        height 100%


.main
    width 100%
    height 100%
    overflow hidden
    .sm    
        overflow hidden
        .sousuo 
            width 100%
            height .44rem
            background #fff 
            display flex
            align-items center
            padding 0 .2rem 
            justify-content space-around
            div:nth-child(1) 
                flex 317
                height .3rem
                display flex
                background #f2f2f2
                align-items center
                img     
                    flex 25
                    width .25rem
                    height .20rem
                    margin-right .2rem
                    margin-left .1rem
                div   
                    flex 210
                    background #f2f2f2
                    border none
                svg 
                    flex 30
            div:nth-child(2) 
                padding-left .1rem
                width .5rem
                height 100%
                display flex
                justify-content center
                align-items center   
                flex 44
        
        .sc-irbamj
            width 100%
            height .83rem
            display flex
            img     
                width 25%
                height .83rem  
        .sc-jly
            width 100%
            height 1.04rem 
            img 
                width 100%
                height 100%
        .listall
            width 100%
            background #fff
            .listnav
                width 100%
                height .44rem
                ul
                    width 100%
                    height 100%
                    li
                        width 50%
                        height 100%
                        float left
                        text-align center
                        line-height .44rem
                    .active
                        border-bottom 2px solid #ff464e
                        color #ff464e 
</style>



