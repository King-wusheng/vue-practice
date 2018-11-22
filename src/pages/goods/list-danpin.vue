<template>
    <div>
        <goodslist :goodsmess='items'></goodslist>
    </div>
</template>

<script>
let count = 1
import { Indicator } from 'mint-ui';
import axios from 'utils/axios.js'
import goodslist from 'list/goodsList.vue'
import BScroll from 'better-scroll'
    export default{
        components:{
            goodslist
        },
        data(){
            return {
               items:[] 
            }
        },
        async beforeCreate () {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })

            let result = await axios({
                method: 'get',
                url: '/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe'
            })
            // console.log(result)
            this.items = result.GoodsRes.goods
            Indicator.close()
        },
        watch:{
            items(){
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
                        url:"/api/getGoods?page="+count+"&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp",
                    })
                    
                    this.items.push(...newmess.data.goods) 
                    
                })
                
                Indicator.close()
                this.$nextTick(() => {
                    bScroll.refresh()
                    bScroll.finishPullUp()
                })
            }
        }
    }
</script>
