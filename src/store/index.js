import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    order:orderSlice.reducer
  }
});

export default store;
