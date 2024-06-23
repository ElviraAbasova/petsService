import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    AddProducts: (state, action) => {
      state.arr = action.payload;
    },
    DeleteProducts: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!=action.payload)
    },
    UpdateProducts: (state, action) => {
      const index = state.arr.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
    },
    PostProducts: (state, action) => {
      const find = state.arr.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.arr=[...state.arr,action.payload]
      }
    },
  },
})

export const { AddProducts,DeleteProducts,UpdateProducts,PostProducts } = productSlice.actions

export default productSlice.reducer
