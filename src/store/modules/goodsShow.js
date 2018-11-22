const state={
    data:[]
}

const actions={
    
}

const mutations={
    setDate (state,datamess) {
        state.data = datamess
        // console.log(state.data)
        // av_fid
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}