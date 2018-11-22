<template>
    <router-link :to="{ name: '/brand', query: { shop_id:good.shop_id,list:0 }}" tag="div" class="gCgGoL">
        <div class="sc-gGBfsJ bHohRa">
            <div class="sc-jnlKLf bYqRFU">
                <img class="sc-fYxtnH idxkID" :src="good.pic_url">
                <div class="sc-elJkPf lcVTjL" v-if="$route.name==='zhuanchang'">
                    <img class="sc-jtRfpW QcHRp" :src="good.logo_url">
                </div>
            </div>
            <div class="sc-tilXH cEQZgN">
                <span class="sc-ktHwxA gVLSd">{{good.cprice}}</span>
                <del>{{good.oprice}}</del>
            </div>
            <div class="sc-cmTdod dFUsnh">{{good.title}}
            </div>
        </div>
    </router-link>
</template>

<script>
    export default{
        props:{
            good:Object
        },
        data(){
            return{
                id:null
            }
        }
    }
</script>

<style lang="stylus">
    .gCgGoL   
        position  relative  
        width  50%  
        float  left  
        background white  
        .sc-jnlKLf  
            width 100%  
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







