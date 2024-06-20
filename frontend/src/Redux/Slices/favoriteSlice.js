import { createSlice } from "@reduxjs/toolkit";

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
      }
      else{
        state.arr = state.arr.filter(elem=> elem._id != action.payload._id)
      }
      localStorage.setItem("favorite", JSON.stringify(state.arr))
    },
    DeleteAll: (state, action) => {
        state.arr=[]
        localStorage.setItem("favorite", JSON.stringify(state.arr))
      },
  },
});

export const { Addfav, DeleteAll } = favoriteSlice.actions;

export default favoriteSlice.reducer;