import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  groomers: [],
  veterinars: [],
  grooming: [],
}

export const datasSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    AddProducts: (state, action) => {
      state.products = action.payload;
    },
    AddGroomers: (state, action) => {
      state.groomers = action.payload;
    },
    AddVeterinars: (state, action) => {
      state.veterinars = action.payload;
    },
    AddGrooming: (state, action) => {
      state.grooming = action.payload;
    },
    DeleteProducts: (state, action) => {
      state.products = state.products.filter(elem=>elem._id!=action.payload)
    },
    UpdateProducts: (state, action) => {
      const index = state.products.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    PostProducts: (state, action) => {
      const find = state.products.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.products=[...state.products,action.payload]
      }
    },
  },
})

export const { AddProducts, AddGroomers, AddVeterinars,AddGrooming,DeleteProducts,UpdateProducts,PostProducts } = datasSlice.actions

export default datasSlice.reducer
