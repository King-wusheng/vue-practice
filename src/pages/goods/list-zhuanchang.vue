<template>
    <div class="zc">
        <goodslist :goodsmess='special'></goodslist>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from 'utils/axios.js'
import goodslist from 'list/goodsList.vue'
import BScroll from 'better-scroll'
let count = 1
    export default{
        components:{
            goodslist
        },
        data(){
            return {
               special:[] 
            }
        },
        async beforeCreate () {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            let result = await axios({
                method: 'get',
                url: '/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc'
            })
            this.special = result.data.goods
            Indicator.close()
        },
        watch:{
            special(){
                let bScroll = new BScroll('.main',{
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
                    let newmess = await axios({
                        method:'get',
                        url:'/api/getGoods?page='+count+'&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc',
                    })
                    
                    this.special.push(...newmess.data.goods) 

                    this.$nextTick(() => {
                        bScroll.refresh()
                        bScroll.finishPullUp()
                    })
                    Indicator.close()
                })
                
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .zc
        width 100%
        overflow hidden
</style>
