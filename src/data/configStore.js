import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "./productsSlice";

export const store = configureStore({
    reducer:{
        product:ProductSlice
    }
})