import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPoints: 0,
  darkMode: true,
};

const cartSlice = createSlice({
  name: "cart",
  //   initialState: [],
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, count, rating } = action.payload;
      state.cartItems.push({ id, count, rating });
      state.totalPoints += count * rating;
    },
    removeFromCart: (state, action) => {
      const { id, count, rating } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.totalPoints -= count * rating;
      }
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { addToCart, removeFromCart, setDarkMode } = cartSlice.actions;

export default cartSlice.reducer;

