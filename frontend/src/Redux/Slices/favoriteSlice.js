import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
const initialState = {
  arr: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    Addfav: (state, action) => {
      let find = state.arr.find((elem) => elem._id == action.payload._id);
      if (!find) {
        state.arr = [...state.arr, action.payload];
        toast("Item added to WishList!", {
          style:{color:"#8d19e8",fontSize:"1.5rem",textAlign:"center"}
        });
      }
      else{
        state.arr = state.arr.filter(elem=> elem._id != action.payload._id)
        toast("Item Remove from WishList!", {
          style:{color:"red",fontSize:"1.5rem",textAlign:"center"}
        });
      }
      localStorage.setItem("favorite", JSON.stringify(state.arr))
    },
    DeleteAll: (state, action) => {
        state.arr=[]
        localStorage.setItem("favorite", JSON.stringify(state.arr))
        toast("Items Remove from WishList!", {
          style:{color:"red",fontSize:"1.5rem",textAlign:"center"}
        });
      },
  },
});

export const { Addfav, DeleteAll } = favoriteSlice.actions;

export default favoriteSlice.reducer;