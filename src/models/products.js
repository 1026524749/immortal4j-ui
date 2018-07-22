export default {
    namespace:'products',
    state:[],
    reducers:{
        'delete'(state,{payload: id}){
            state.filter(item=> item.id !== id);
        }
    }
}