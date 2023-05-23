import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const isExist = state.find(item => item.id === action.payload.id);
      if(isExist){
          return state
      }else{
        return [...state, action.payload];
      }
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
