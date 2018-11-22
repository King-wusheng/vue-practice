<template>
   
        <div class="gCgGoL">
            <router-link :to="{name:'/shop',query:{ good_id:mess.enid}}" class="sc-gGBfsJ bHohRa">
                <div class="sc-jnlKLf bYqRFU">
                    <img class="sc-fYxtnH idxkID" :src=" mess.picurl ">
                    <div v-show="mess.status_txt?true:false" class="sc-elJkPf lcVTjL">
                       {{mess.status_txt}}
                           
                    </div>
                </div>
                <div class="sc-tilXH cEQZgN">
                    <span class="sc-ktHwxA gVLSd">￥{{ mess.cprice }}</span>
                    <del>{{ mess.oprice }}</del>
                </div>
                <div v-show="mess.vip_mark?true:false" class="vip">
                    {{mess.vip_mark?mess.vip_mark.text:''}}
                </div>
                <div class="sc-cmTdod dFUsnh">
                    {{mess.title}}
                </div>
            </router-link>
        </div>
    
        
</template>

<script>
    export default{
        data(){
            return{
                mess:[]
            }
        },
        props:{
            item:Object
        },
        mounted() {
           this.mess = this.item 
        },
    }
</script>

<style lang="stylus" scoped>
    .vip 
        font-size .1rem
        color #999
        padding .02rem .1rem
    .all 
        width 100%
        height 100%
        overflow hidden
    .gCgGoL   
        position  relative  
        width  50%  
        float  left  
        height 2.64rem
        background white  
        .sc-jnlKLf  
            width 100%  
            height 1.87rem  
            img  
                width 100%  
                height 100%  
                
            .sc-elJkPf  
                color #fff !important
                font-size .1rem
                position  absolute  
                bottom  0.47rem  
                right .13rem  
                width  .52rem   
                background rgba(0,0,0,.65) !important
                line-height .17rem
                text-align center
                padding-top .05rem
                
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



