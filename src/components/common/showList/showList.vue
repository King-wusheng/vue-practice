<template>
    <div>
        <div class="top">
            <span>——{{ data.title }}——</span>
        </div>
        <listItem :num="num" :itemdata="itemdata" ></listItem>
    </div>
</template>

<script>
    import listItem from './listItem.vue'
    import axios from 'utils/axios.js'
    import { Indicator } from 'mint-ui';
    export default{
        data(){
            return{
                data:'',
                num:'',
                itemdata:''
            }
        },
        props:{
            message:{},
            id:''
        },
        methods:{
          changenum(val){
              this.num=val;
          }
        },
        async beforeCreate()  {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            let listname = this.$route.query.shop_id
            const mess = await axios({
                method:'get',
                url:"/api/getBrandGoods?page=1&brand_id=1331677_"+listname+"&msort=1&goods_utype=C4&price_range=&cat_threeids="
            })
            let message = mess
            this.data = message.floor_bar?message.floor_bar[this.num]:message.storeInfo.title
            this.itemdata = message
            this.itemdata.store_name = this.message.store_name
            // console.log(this.itemdata)
            Indicator.close()
        },
        watch: {
            id(){
                let goodsid = this.$route.query.list
                this.data = this.message.floor_bar?this.message.floor_bar[goodsid]:this.message.storeInfo.title
                this.num = goodsid
                this.itemdata = this.message
            }
        },
        updated() {
            
        },
        components:{
            listItem
        },
    }
</script>

<style lang="stylus">
    .top    
        width 100%
        height .44rem
        text-align center
        line-height .44rem
</style>

