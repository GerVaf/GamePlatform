import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:"product",
    initialState:{
        item:[],
        cart:[]
    },
    reducers:{
        
        addProducts:(state,action)=>{
            state.item = action.payload
        },
        addItems:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter(item=>item.id !== action.payload.id)
        }
    }
})
export const {addProducts,addItems,removeFromCart} = ProductSlice.actions
export default ProductSlice.reducer