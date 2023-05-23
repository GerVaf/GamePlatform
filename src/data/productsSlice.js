import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    item: [],
    cart: [],
    custom:[],
  },
  reducers: {
    addProducts: (state, action) => {
      state.item = action.payload;
    },
    addItems: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    customItems: (state, action) => {
      state.custom = state.item.filter((item) =>
        item.genres.find((el) => el.name.includes(action.payload.title)),
        console.log(state.custom)
      );
    },
  },
});
export const { addProducts, addItems, removeFromCart, customItems } =
  ProductSlice.actions;
export default ProductSlice.reducer;
