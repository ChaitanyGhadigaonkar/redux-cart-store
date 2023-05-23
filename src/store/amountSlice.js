import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name:"amount",
    initialState:50,
    reducers:{
        addToTheTotal(state,action){
            return state+action.payload;
        },
        removeToTheTotal(state,action){
            return state-action.payload;
        }
    }
})

export const {addToTheTotal,removeToTheTotal} = amountSlice.actions;

export default amountSlice.reducer;