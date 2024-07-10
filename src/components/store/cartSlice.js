import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name:"cart-items",
    initialState:{
        length:0
    },
    reducers:{
        addCartData:(state,action)=>{
            state.length = action.payload
        }
       
    }
})
export const { addCartData } = cartSlice.actions;
export default cartSlice.reducer