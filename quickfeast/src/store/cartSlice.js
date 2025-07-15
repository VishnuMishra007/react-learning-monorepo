import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            //return updated state
            state.push({ id: action.payload.uniqueId, value: action.payload.value});
        },
        deleteItemFromCart: (state, action) => {
            //return updated state
            // const item = action.payload.id;
            // const index = state.indexOf(item);
            // if(index>-1){
            //     state.splice(index,1);
            // }
            state.splice(action.payload, 1);
            return state;
        }
    }
}); 


export const { addToCart , deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
