import { configureStore } from '@reduxjs/toolkit'
import datasSlice from './Slices/datasSlice'
import favoriteSlice from './Slices/favoriteSlice'

export const store = configureStore({
  reducer: {
    datas: datasSlice,
    favorite: favoriteSlice
  },
})