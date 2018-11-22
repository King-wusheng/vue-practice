import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goodsShow from './modules/goodsShow'
import cart from './modules/cart'
import search_history from './modules/search_history'


export default new Vuex.Store({
  modules: {
    goodsShow,
    cart,
    search_history
  }
})

