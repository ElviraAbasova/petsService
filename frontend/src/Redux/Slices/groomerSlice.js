import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const groomerSlice = createSlice({
  name: 'groomer',
  initialState,
  reducers: {
    AddGroomers: (state, action) => {
      state.arr = action.payload;
    },
    DeleteGroomer: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!=action.payload)
    },
    UpdateGroomer: (state, action) => {
      const index = state.arr.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
    },
    PostGroomer: (state, action) => {
      const find = state.arr.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.arr=[...state.arr,action.payload]
      }
    },
  },
})

export const { AddGroomers,DeleteGroomer,UpdateGroomer,PostGroomer } = groomerSlice.actions

export default groomerSlice.reducer
