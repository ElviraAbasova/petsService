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
    }
  },
})

export const { AddProducts, AddGroomers, AddVeterinars,AddGrooming } = datasSlice.actions

export default datasSlice.reducer
