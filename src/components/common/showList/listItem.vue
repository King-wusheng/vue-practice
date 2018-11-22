<template>
    <div>
        <div v-if="bool==true">
            <router-link :to="{ name: '/shop', query: { good_id:data.goods_id,store_name:name,shop_id:$route.query.shop_id}}" v-if="index>0"  class="gCgGoL" v-for="(data,index) of datas" :key="index">
                    <div class="sc-gGBfsJ bHohRa">
                        <div class="sc-jnlKLf bYqRFU">
                            <img class="sc-fYxtnH idxkID" :src="data.pic_url">
                            <div class="sc-elJkPf lcVTjL" v-if="$route.name==='zhuanchang'">
                                <img class="sc-jtRfpW QcHRp" :src="data.logo_url">
                            </div>
                        </div>
                        <div class="sc-tilXH cEQZgN">
                            <span class="sc-ktHwxA gVLSd">{{data.cprice}}</span>
                            <del>{{data.oprice}}</del>
                        </div>
                        <div class="sc-cmTdod dFUsnh">{{data.title}}
                        </div>
                    </div>
                
            </router-link>
        </div>
        <div v-else>
            <div class="gCgGoL1">
                <router-link  :to="{ name: '/shop', query: {good_id:data.goods_id,store_name:name,shop_id:$route.query.shop_id}}" class="sc-gGBfsJ bHohRa" v-for="(data,index) of datas" :key="index">
                    <div class="sc-jnlKLf bYqRFU">
                        <img class="sc-fYxtnH idxkID" :src="data.pic_url">
                        <div class="sc-elJkPf lcVTjL" v-if="$route.name==='zhuanchang'">
                            <img class="sc-jtRfpW QcHRp" :src="data.logo_url">
                        </div>
                    </div>
                    <div class="sc-tilXH cEQZgN">
                        <span class="sc-ktHwxA gVLSd">{{data.cprice}}</span>
                        <del>{{data.oprice}}</del>
                    </div>
                    <div class="sc-cmTdod dFUsnh">{{data.title}}
                    </div>
                </router-link>
            </div>
        </div>
        
    </div>

</template>

<script>
    export default{
        data(){
            return {
                listid:0,
                datas:[],
                bool:true,
                store_name:'',
                name:''
            }
        },
        props:{
            itemdata:{},
            num:''
        },
        methods:{
            gCgGoLClick(){
                 this.store_name = this.itemdata.store_name
            }
        },
        mounted() {
             this.store_name = this.itemdata.store_name
        },
        
        beforeCreate() {
            
            console.log(this.name)
        },
        watch:{
            itemdata(){
                this.name = this.itemdata.store_name
                console.log(this.itemdata)
            },
            num(){
                this.listid = this.$route.query.list
                this.datas.store_name = this.itemdata.store_name
                this.datas = this.itemdata.floor_data?this.itemdata.floor_data[this.listid]:this.itemdata.goods
                this.store_name = this.itemdata.store_name
                this.bool = this.itemdata.floor_data?true:false
            }
        },
    }
</script>

<style lang="stylus">
div
    width 100%
    overflow hidden
    .gCgGoL1   
        position  relative  
        width 100%
        float  left  
        background white 
        .sc-gGBfsJ
            width 50%
            float left
            .sc-jnlKLf 
                height 1.87rem  
                img  
                    width 100%  
                    height 100%  
                    
                .sc-elJkPf  
                    background-size  cover  
                    position  absolute  
                    bottom  0.47rem  
                    right .13rem  
                    width  .51rem  
                    height  .26rem  
                    background-color  #fff  
                    
                .hovOpk   
                    position  absolute  
                    left  0  
                    top  0  
                    width  .45rem  
                    height  .45rem  
                
div
    width 100%
    overflow hidden
    .gCgGoL   
        position  relative  
        width 50%
        float  left  
        background white 
        .sc-gGBfsJ
            float left
            .sc-jnlKLf 
                height 1.87rem  
                img  
                    width 100%  
                    height 100%  
                    
                .sc-elJkPf  
                    background-size  cover  
                    position  absolute  
                    bottom  0.47rem  
                    right .13rem  
                    width  .51rem  
                    height  .26rem  
                    background-color  #fff  
                    
                .hovOpk   
                    position  absolute  
                    left  0  
                    top  0  
                    width  .45rem  
                    height  .45rem              
.sc-tilXH  
    width 100%  
    height .22rem  
    margin-top  .06rem  
    padding 0 .08rem  
    font-size  .15rem  
    color #ff464e  
    del  
        margin-left .05rem
        text-decoration  line-through  
        color #ccc  
        font-size  .10rem  
        
    
.dFUsnh   
    position  relative  
    font-size  0.12rem  
    color  #3b3b3b  
    padding-left  0.08rem  
    padding-right  .62rem  
    overflow  hidden  
    white-space  nowrap  
    text-overflow  ellipsis  
    margin-bottom  0.12rem  
    p  
        color  #bbb  
        position  absolute  
        font-size  .12rem  
        right .12rem  
                  
              
          
</style>







