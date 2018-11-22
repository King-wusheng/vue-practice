const state={
    his:[]
}

const actions={
    
}

const mutations={
    setDate (state,datamess) {
        state.his.push(datamess) 
        // console.log(state.his)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}