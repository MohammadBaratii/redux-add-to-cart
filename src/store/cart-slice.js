import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalAmount++;
      if (!existingItem) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          totalPrice: action.payload.price,
          amount: 1,
        });
      } else {
        existingItem.amount++;
        existingItem.totalPrice =
          existingItem.totalPrice + action.payload.price;
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalAmount--;
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
