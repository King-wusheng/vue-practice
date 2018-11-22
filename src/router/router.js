import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import goods from 'pages/goods/Goods.vue'
import fenlei from 'pages/fenlei/fenlei.vue'
import mine from 'pages/person/mine.vue'
import shopCar from 'pages/shopCart/shopCart.vue'
import zhuanchang from 'pages/goods/list-zhuanchang.vue'
import danpin from 'pages/goods/list-danpin.vue'
import brand from 'pages/goodsShow/goodsShow.vue'
import Home from 'pages/Home.vue'
import shopmess from 'pages/goodsShow/shopmess.vue'
import search from 'pages/sousuo/search.vue'
import search_goods from 'pages/search_result/search_goods.vue'
const routes = [
    {
        path:'/',
        redirect:'/home/goods'
    },
    {
        name:'/brand',
        path:'/brand',
        component:brand
    },
    {
        name:'/result',
        path:'/result',
        component:search_goods
    },
    {
        name:'/shop',
        path:'/shop',
        component:shopmess
    },

    {
        name:'/sc',
        path:'/sc',
        component:search
    },
    {
        name:'/home',
        path:'/home',
        redirect:'/home/goods/zhuanchang',
        component:Home,
        children:[
            {   
                name:'goods',
                path:"goods",
                component:goods,
                redirect:'/home/goods/zhuanchang',
                children:[
                    {
                        name:'zhuanchang',
                        path:'zhuanchang',
                        component:zhuanchang
                    },
                    {
                        name:'danpin',
                        path:'danpin',
                        component:danpin
                    }
                ]
            },
            {
                name:'fenlei',
                path:"fenlei",
                component:fenlei
            },
            
            {
                name:'mine',
                path:"mine",
                component:mine
            },
            {
                name:'shopCar',
                path:"shopCar",
                component:shopCar
            },
        ]
    }
    
    

]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router