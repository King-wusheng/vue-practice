<template>
    <div class="fenlei">
        <div id="search-box">
            <div class="box-search">
                <svg t="1541678667339" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1975" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M989.024 924.416l-189.536-189.248c53.216-72.736 82.304-161.088 82.304-251.2 0-235.072-191.552-426.336-427.008-426.336-235.456 0-427.04 191.264-427.04 426.336 0 235.104 191.584 426.368 427.04 426.368 64.128 0 125.952-14.112 183.744-41.92 12.256-5.888 17.408-20.576 11.52-32.832-5.92-12.256-20.576-17.376-32.896-11.488-51.072 24.576-105.696 37.024-162.336 37.024-208.32 0-377.76-169.216-377.76-377.184 0-207.968 169.44-377.152 377.76-377.152 208.288 0 377.728 169.216 377.728 377.152 0 86.24-30.144 170.688-84.864 237.792-8 9.792-7.264 24 1.664 32.928l204.864 204.544c4.8 4.8 11.104 7.2 17.408 7.2 6.304 0 12.608-2.4 17.408-7.2C998.656 949.6 998.656 934.016 989.024 924.416z" p-id="1976" fill="#333"></path></svg>
                <input type="search" id="keyword"  placeholder="搜索商品">
            </div>
        </div>
        <div class="list-center">
            <div class="list-left">
                <ul class="list-title"  @click="navclick">
                    <router-link  :to="{ query: {listnum:index }}" tag="li" v-for="(nav,index) of list" :key="index" :active-class="$route.query.listnum==index?'active':''" >
                            {{ list[index].name }}
                    </router-link>
                    
                </ul>
            </div>
            <div class="list-right">
                <ul>
                    <li v-for="(item,key,index) of data" :key="index">
                        <img :src='"https://s2.juancdn.com"+item.icon+"?iopcmd=convert&dst=webp"' >
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'utils/axios.js'
import { Indicator } from 'mint-ui';
import BScroll from 'better-scroll'
    export default{
        data(){
            return {
                list:[],
                num:'',
                data:[]
            }
        },
        methods:{
            navclick(){
                this.num = this.$route.query.listnum
                this.data = this.list[this.num].secondCateList
            }
        },
        
        async beforeCreate(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            let message = await axios({
                method:'get',
                url:'/fenlei.json'
            })  
            this.list = message
            this.num = this.$route.query.listnum
            this.data = this.list[this.num].secondCateList
            Indicator.close()
            if(this.$route.name == 'fenlei'){
                let bscroll1 = new BScroll('.list-right',{
                    click:true,
                    probeType:1,
                    pullUpLoad: {
                        threshold: 50
                    }
                }) 
                let bscroll2 = new BScroll('.list-left',{
                    click:true,
                    probeType:1,
                    pullUpLoad: {
                        threshold: 50
                    }
                })
                this.num = this.$route.query.listnum
                this.data = this.list[this.num].secondCateList
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
#search-box
    width 100%
    margin .12rem 0
    padding 0 .12rem
    height .27rem
    display relative
    .box-search
        width 100%
        height 100%
        display flex
        border 1px,#bbb
        align-items center
        #keyword 
            padding-left .06rem
            font-size .13rem
            color #999
            flex 618
            background #fff
            border-top none
            border-left none
            border-bottom none
            border-right none
        svg 
            flex 70
            margin-left .06rem

.fenlei
    background #fff
    display flex
    flex  1
    overflow hidden
    flex-direction column
#search-box
    flex 27
.list-center
    display flex
    height 6.16rem
    overflow hidden
    .list-left
        width .94rem
        height 100%
        display flex
        overflow hidden
        background #f9f9f9
        ul
            width 100%
            height 6.4rem
            overflow hidden
            li
                width 100%
                height .45rem
                
                text-align center
                line-height .45rem
            .active
                    color  #ff464e
                    border-left  4px solid #ff464e
                    background-color  #fff
    .list-right
        flex 1
        ul 
            width 100%
            overflow hidden
            margin-top .1rem
            li  
                margin 0 .13rem
                width .58rem
                height .93rem
                float left
                text-align center
                img 
                    width 100%
                    height .58rem  
                span 
                    color #333
                    font-size .12rem           
</style>



