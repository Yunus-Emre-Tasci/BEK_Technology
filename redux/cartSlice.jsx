import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, count, rating } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += count;
        existingItem.totalRating = existingItem.count * rating;
      } else {
        state.push({ id, name, count, totalRating: count * rating });
      }
    },
    removeFromCart: (state, action) => {
      const { id, count, rating } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count -= count;
        existingItem.totalRating = existingItem.count * rating;
        if (existingItem.count <= 0) {
          const index = state.findIndex((item) => item.id === id);
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

