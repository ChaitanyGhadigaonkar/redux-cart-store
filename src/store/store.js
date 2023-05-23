import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import amountReducer from "./amountSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    amount:amountReducer
  },
});

export default store;
