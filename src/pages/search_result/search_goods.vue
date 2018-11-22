<template>
    <div class="allmess">
        <div class="main">
            <div class="header">
                <div class="top">
                    <svg @click="back" class="back icon" t="1541658183953"  style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2348" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z" p-id="2349" fill="#666"></path></svg>
                    <div class="leftsearch">
                        <svg t="1541248522133" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="27"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" p-id="2305" fill="#bfbfbf"></path></svg>
                        <input class="txt" type="text" :value="$route.query.keywords" >
                        <span>搜索</span>
                    </div>
                    <svg class="else icon" t="1542112468682"  style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4361" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z" p-id="4362" fill="#8a8a8a"></path></svg>
                </div>      
            </div>
            <div class="brand-sort">
                <ul>
                    <li>推荐</li>
                    <li @click="price">价格</li>
                    <li @click="sales">销量</li>
                    <li>上新</li>
                    <li @click="open_filter">筛选
                        <svg t="1542202716528" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3474" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M935.136 190.176c0.864-1.6 1.856-3.104 2.4-4.8 0.64-1.984 0.8-3.968 0.992-6.016 0.096-0.992 0.48-1.92 0.48-2.944 0-0.64-0.128-1.248-0.16-1.92-0.064-0.928-0.064-1.792-0.224-2.72-7.84-136.384-356.16-143.424-426.656-143.424-71.328 0-427.04 7.136-427.04 148.064 0 6.496 2.176 12.8 6.144 17.984l298.816 384.512 0 387.52c0 16.16 13.12 29.248 29.28 29.248s29.28-13.088 29.28-29.248l0-397.568c0-6.496-2.176-12.8-6.144-17.984l-297.152-382.304c17.152-40.128 163.008-81.696 366.816-81.696 203.2 0 348.64 41.312 366.56 81.312-61.12 69.184-168.896 97.76-366.24 97.76-16.16 0-29.28 13.088-29.28 29.248s13.12 29.248 29.28 29.248c94.496 0 188.928-5.184 269.216-30.72l-199.904 257.184c-4 5.152-6.144 11.456-6.144 17.984l0 227.168c0 16.16 13.088 29.248 29.248 29.248s29.248-13.088 29.248-29.248l0-217.12 297.28-382.432c0.576-0.704 1.216-1.312 1.76-2.016C934.048 193.12 934.368 191.584 935.136 190.176z" p-id="3475" fill="#bfbfbf"></path></svg>
                    </li>
                </ul>
            </div>
            <div class="filter" v-show="filter" >
                <div class="filter_left" @click="filter_left">

                </div>
                <div class="filter_right">
                    <div class="filter_title">筛选</div>
                    <div class="price_title">价格区间(元)</div>
                    <div class="price_input">
                        <input type="number"  placeholder="最低价"  class="low" v-model="low">
                        <div class="line">
                            <svg t="1542202837030" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7428" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M204 460l624 0c26.4 0 48 21.6 48 48 0 26.4-21.6 48-48 48l-624 0c-26.4 0-48-21.6-48-48C156 481.6 177.6 460 204 460z" p-id="7429" fill="#bfbfbf"></path></svg>
                        </div>
                        <input type="number" placeholder="最高价"  class="high" v-model="high">
                    </div>
                    <div class="category clear">
                        <div class="category_title">分类</div>
                        <div class="category_more">
                            更多
                            <svg t="1542203200734" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8209" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M511.31 669.4a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 651.54a61.41 61.41 0 0 1-43.39 17.86z" fill="#bfbfbf" p-id="8210"></path></svg>
                        </div>
                    </div>
                    <div class="categorys clear"  >
                        <div v-for="name of classify" :key="name.id">{{ name.name }}</div>
                    </div>
                    <div class="filter_bnt">
                        <div class="reset" @click="reset">重置</div>
                        <div class="ensure" @click="sure">确定</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="goods" v-if="(message.length > 0) && message[0].gtype">     
                    <goodslist :item="item" v-for="item of message" :key="item.id"></goodslist>
                </div>
                <div class="goods1" v-else>  
                    <div>
                        <div class="search-result">
                            <div class="no_data">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/rearch-result.png?d5c13c9b-1&amp;sv=449ce9ee">
                                <div class="b-title">哎呀，结果溜走了，换个词试试</div>
                                <div class="l-title">为您推荐以下商品</div>
                            </div> 
                        </div>
                        
                        <div class="hot">
                            <span>-- 热销商品 --</span>    
                        </div>  
                        <goodslist  :item="item" v-for="item of message" :key="item.id"></goodslist>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import axios from 'utils/axios.js'
    import goodslist from './goods.vue'
    import BScroll from 'better-scroll'
    let count = 1
    import { Indicator } from 'mint-ui';
    import _ from 'lodash'
    export default{
        data(){
            return {
                message:[],
                keywords:'',
                low:'',
                high:'',
                maxprice:'',
                minprice:'',
                classify:[],
                count:10,
                filter:false,
            }
        },
        components:{
            goodslist
        },
        methods:{
            back(){
                this.$router.back()
            },
            price(){
                this.sort = true
                this.message = _.sortBy(this.message, 'cprice')
            },
            sales(){
                this.message = _.sortBy(this.message, 'sort')
            },
            sure(){
                this.maxprice = this.high || 1000
                this.minprice = this.low || 0
                this.message = _.filter(this.message, (data)=>{
                    return data.cprice>=this.minprice  && data.cprice <=this.maxprice
                })
                this.filter = false
            },
            open_filter(){
                this.filter = true
            },
            filter_left(){
                this.filter = false
            },
            reset(){
                this.maxprice = this.high = '' || 1000
                this.minprice = this.low = '' || 0
                this.message = _.filter(this.message, (data)=>{
                    return data.cprice>=this.minprice  && data.cprice <=this.maxprice
                })
                this.filter = false
            }
        },
        computed:{

        },
        async beforeCreate() {
            Indicator.open({
                spinnerType: 'double-bounce'
            })
            this.keywords = this.$route.query.keywords
            let mess =await axios({
                method:'get',
                url:"/search?keyword="+this.keywords+"&storeid=&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id="
            })
            this.message = mess.data.list
            this.classify = _.take(mess.data.aggs.cat_threeid,9)
            //  console.log(this.classify)
           console.log()
            
            Indicator.close()


            
        },
        watch:{
             message(){
                let bScroll = new BScroll('.allmess',{
                    click:true,
                    probeType:1,
                    pullUpLoad: {
                        threshold: 50
                    }
                })
                bScroll.on('pullingUp',async ()=>{
                    count++
                    Indicator.open({
                        spinnerType: 'double-bounce'
                    })
                    const mess = await axios({
                        method:'get',
                        url:"/search?keyword="+this.keywords+"&storeid=&item=&user_groupids=p8_c4_l4_222&page="+count+"&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id="
                    })
                    this.message.push(...mess.data.list) 
                    Indicator.close()
                    this.$nextTick(() => {
                        bScroll.refresh()
                        bScroll.finishPullUp()
                    })
                })
            }
        },
        mounted() {

        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.filter
    width 100%
    height 100%
    position absolute 
    left 0 
    top 0
    color #333
    font-size .14rem 
    z-index 1000
    display flex 
    .filter_left
        flex 105
        background #333
        opacity .5
    .filter_right 
        flex 644
        background #fff
        height 100%
        overflow hidden 
        padding-top .32rem
        .filter_title
            width 100%
            height auto 
            padding-left .16rem
            text-align left
            margin-bottom .19rem
        .price_title
            width 100%
            height auto 
            padding-left .16rem
            text-align left
            margin-top .32rem
        .price_input
            width 100%
            height .28rem 
            margin .16rem 0 .36rem 0
            padding 0 .16rem
            display flex 
            input
                width 1.22rem 
                height 100%
                background #f4f4f8
                border-left 0 
                border-top 0 
                border-bottom 0
                border-right 0
                text-align center
                line-height .28rem
                font-size .12rem
            .line 
                text-align center
                display flex 
                align-items center
                justify-content center
.category
    width 100%
    height auto 
    padding 0 .16rem 
    display flex
    justify-content space-between
    div 
        display inline-block
        width auto
    .category_more
        color #999
        font-size .12rem
        display flex
        align-items center
        svg 
            margin-left .03rem
.categorys
    width 100%
    min-height 1.29rem
    overflow hidden 
    padding 0 .16rem
    font-size .12rem
    div
        margin .12rem .1rem 0 0
        float left
        width auto
        padding 0 .2rem
        line-height .27rem 
        height .27rem
        background #f4f4f8
.filter_right 
    position relative

.filter_bnt
    position absolute  
    top 6.22rem
    left 0  
    display flex
    height .44rem
    font-size .16rem
    .reset 
        text-align center 
        line-height .44rem 
    .ensure
        text-align center 
        line-height .44rem 
        background #ff464e
        color white
        
.allmess
    width 100%
    height 100%
    background #fff
    overflow hidden
.main 
    width 100%
    overflow hidden
.top 
    width 100%
    height .44rem
    display flex
    align-items center
    .back
        flex 96 
    .leftsearch
        flex 548
        height .3rem
        margin .1rem 0 .1rem 0 
        border .01rem,#bbb
        display flex 
        align-items center
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
        span 
            height 100%
            line-height .28rem
            font-size .14rem
            margin-right .1rem
    .else
        flex 90

.brand-sort
    width 100%
    height .4rem 
    padding .05rem 0
    border .01rem 0 ,#ebebeb
    ul 
        width 100%
        height 100%
        display flex 
        align-items center
        li 
            flex 1
            text-align center
            display flex 
            align-items center
            justify-content center
            svg 
                margin-left .02rem


.hot 
    width 100%
    height .4rem
    background #f4f4f8
    text-align center
    span 
        line-height .4rem
        color #666
        font-size .13rem

.search-result
    width 100%
    height 2.67rem
    text-align center
    .no_data
        width 100%
        height 100%
        padding .28rem 0 .41rem 0
        color #999 
        text-align center
        img 
            width 1.41rem
            height 1.41rem
        .b-title
            color #333 
            font-size .16rem
        .l-title
            font-size .12rem
            margin-top .1rem
</style>

