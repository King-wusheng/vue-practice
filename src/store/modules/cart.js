const state = {
    items:[],
    discount:[]
}

const getters={
    price(state){

    }
}

const mutations = {
    reduce(state,index){
        state.items[index].buy_count =Number( state.items[index].buy_count)-1
    },
    add(state,index){
        state.items[index].buy_count = Number(state.items[index].buy_count)+1
    },
    remove(state,message){
        console.log(state.items)
    },
    removeit(state){
        
        state.items.forEach((element,index) => {
            var index = state.items.indexOf(element)
            element.bool?state.items.splice(index,1):console.log('false')
            
        });
       
        
    }
}

const actions = {
    AddToCart ({state,commit},message) {
        
        state.discount = message[1]
        let item = state.items.find(mess => mess.sku_id == message[0].sku_id)
        // console.log(item)
        if(!!item){
            let index = state.items.indexOf(item)
            state.items[index].buy_count =Number(state.items[index].buy_count) +Number(message[0].buy_count) 
           
        }else{
            state.items.push(message[0])
            
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
