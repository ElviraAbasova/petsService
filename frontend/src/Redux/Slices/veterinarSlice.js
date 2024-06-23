import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const veterinarSlice = createSlice({
  name: 'veterinar',
  initialState,
  reducers: {
    AddVeterinars: (state, action) => {
      state.arr = action.payload;
    },
    DeleteVeterinar: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!=action.payload)
    },
    UpdateVeterinar: (state, action) => {
      const index = state.arr.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
    },
    PostVeterinar: (state, action) => {
      const find = state.arr.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.arr=[...state.arr,action.payload]
      }
    },
  },
})

export const { AddVeterinars,DeleteVeterinar,UpdateVeterinar,PostVeterinar } = veterinarSlice.actions

export default veterinarSlice.reducer
