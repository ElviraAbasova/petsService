import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const datasSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    AddDatas: (state,action) => {
      state.arr = action.payload
    },
  },
})


export const {AddDatas} = datasSlice.actions

export default datasSlice.reducer