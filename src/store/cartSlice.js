import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    totalAllPrice:0,
    showCart: false,
    changed: false,
  },
  reducers: {
    addToCart(state,action){
      state.changed = true;
      const newItem = action.payload;
      //cek item udah masuk cart 
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state,action){
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id)
        existingItem.state =false
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  totalAllPrice(state,action){
    state.totalAllPrice = action.payload;
  },
  clearCart(state){
    state.itemsList = [];
  }
  
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;