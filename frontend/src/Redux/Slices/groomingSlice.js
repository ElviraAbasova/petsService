import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const groomingSlice = createSlice({
  name: 'grooming',
  initialState,
  reducers: {
    AddGroomings: (state, action) => {
      state.arr = action.payload;
    },
    DeleteGrooming: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!=action.payload)
    },
    UpdateGrooming: (state, action) => {
      const index = state.arr.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
    },
    PostGrooming: (state, action) => {
      const find = state.arr.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.arr=[...state.arr,action.payload]
      }
    },
  },
})

export const { AddGroomings,DeleteGrooming,UpdateGrooming,PostGrooming } = groomingSlice.actions

export default groomingSlice.reducer
