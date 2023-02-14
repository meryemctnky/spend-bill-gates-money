import { createSlice } from "@reduxjs/toolkit";
import products from "../data/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    currentMoney: 100000000000,
    totalMoney: 100000000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
        state.products[productIndex].count = action.payload.count;
        state.currentMoney = Number(state.totalMoney) - Number(state.products.reduce((acc, product) => acc + product.count * product.price,0));
      },
  },
});

export const { updateCount } = productsSlice.actions;

export default productsSlice.reducer;
