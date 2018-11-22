<template>
    <div class="searchall">
        <div class="top">
            <div class="leftsearch">
                <svg t="1541248522133" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="27"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" p-id="2305" fill="#bfbfbf"></path></svg>
                <input class="txt" type="text" ref="search" v-model="value">
                <!-- <router-link :to="{name:'/result',query:{keywords:keyword}}" tag="span">
                    <p @click="historysearch" >搜索</p>
                </router-link> -->
                <span @click="historysearch">
                    <router-link @click="historysearch" :to="{name:'/result',query:{ keywords:value}}" tag="p" >搜索</router-link>
                </span>
            </div>
            <span class="else" @click="back">取消</span>
        </div>  

        <div class="search">
            <p class="search__title">热搜</p>
            <ul class="search__ul js-search-history" id="hot-keywords">
                <li v-for="hot of hotmess" :key="hot.id">{{ hot.text }}</li>
            </ul>
            <div id="search-history" style="">
                <p class="search__title">
                    搜索历史 
                    <svg @click="empty" t="1542109359951" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3366" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M585.27998 767.998465 585.27998 365.722472c0-46.879704 73.238025-46.879704 73.238025 0l0 402.275993C658.518005 814.883285 585.27998 814.883285 585.27998 767.998465L585.27998 767.998465 585.27998 767.998465zM365.500415 767.998465 365.500415 365.722472c0-46.879704 73.271794-46.879704 73.271794 0l0 402.275993C438.771185 814.883285 365.500415 814.883285 365.500415 767.998465L365.500415 767.998465 365.500415 767.998465zM988.190423 182.861748 805.060569 182.861748l0-73.16844c0-60.576657-49.247634-109.692285-108.754936-109.692285L328.879356 0.001023c-60.673871 0-109.887736 49.116651-109.887736 109.692285l0 73.16844L35.860742 182.861748c-46.949288 0-46.949288 73.104995 0 73.104995l952.32968 0C1035.104919 255.966743 1035.104919 182.861748 988.190423 182.861748L988.190423 182.861748 988.190423 182.861748zM292.26239 109.692285c0-19.428491 17.158798-36.58729 36.615942-36.58729l367.426277 0c19.459191 0 35.484166 14.863523 35.484166 36.58729l0 73.16844L292.26239 182.860724 292.26239 109.692285 292.26239 109.692285zM768.410857 1024 255.607562 1024c-60.640102 0-109.853967-49.111534-109.853967-109.687168L145.753595 365.722472c0-21.723767 17.158798-36.586267 36.615942-36.586267 19.462261 0 36.621059 14.862499 36.621059 36.586267l0 548.589336c0 19.389606 17.192567 36.547381 36.615942 36.547381l512.803295 0c19.457144 0 36.649711-17.157775 36.649711-36.547381L805.059546 366.855272c0-48.012504 73.238025-48.012504 73.238025 0l0 547.456536C878.298594 974.888466 829.084729 1024 768.410857 1024L768.410857 1024zM768.410857 1024" p-id="3367" fill="#8a8a8a"></path></svg>
                </p>
                <ul class="search__ul js-search-history" v-show="products==''?false:true">
                    <router-link :to="{name:'/result',query:{ keywords:his}}" tag="li"  class="his" v-for="his of products" :key="his.id">{{his}} </router-link>
                </ul>
            </div>
        </div>    
    </div>
</template>

<script>
    import axios from 'utils/axios.js'
    import {mapState,mapActions,mapMutations} from 'vuex'
    export default{
        data(){
            return {
                hotmess:[],
                keyword:'',
                value:''
            }
        },
        methods:{
            historysearch(){
                this.keyword = this.$refs.search.value
                this.$refs.search.value = ''
                this.$store.commit('search_history/setDate', this.value)
            },
            back(){
                this.$router.back()
            },
            empty(){
                
            }
        },
        async beforeCreate() {
            
            const mess =await axios({
                method:'get',
                url:'/keywords/search?plateform=m&zy_ids=c4_l4&item='
            })
            // console.log(mess)
            this.hotmess = mess.jump_keywords
        },
        computed: {
            ...mapState('search_history', {
                products: 'his'
            })
        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.searchall 
    width 100%
    height 100%
    background #fff
.top 
    width 100%
    height .44rem
    display flex
    align-items center
    padding-left .15rem
    .back
        flex 96 
    .leftsearch
        flex 548
        height .3rem
        margin .1rem 0 .1rem 0 
        display flex 
        align-items center  
        background #f2f2f2
        border-radius .1rem
        svg 
            flex 100
        .txt
            height 100%
            border-left 0
            border-right 0
            border-top 0
            border-bottom 0
            flex 450
            font-size .13rem
            color #666
            background #f2f2f2
        span 
            height 100%
            line-height .28rem
            font-size .14rem
            margin-right .1rem
            font-size .12rem
            color #666
    .else
        flex 90
        font-size .14rem

.search
    width 100%
    overflow hidden
    padding 0 .14rem 
    .search__title
        margin-top .14rem 
        color #999
        margin-bottom .1rem
        svg 
            float right 
            margin-right .2rem
    .search__ul
        width 100%
        overflow hidden 
        li 
            display inline-block
            margin .08rem .1rem .03rem 
            padding .05rem .1rem
            font-size .12rem
            color #ff464e
            background #f4f4f4
.his 
    color #666 !important
 </style>




