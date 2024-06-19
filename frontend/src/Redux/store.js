import { configureStore } from '@reduxjs/toolkit'
import datasSlice from './Slices/datasSlice'

export const store = configureStore({
  reducer: {
    datas: datasSlice,
  },
})