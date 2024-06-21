import { configureStore } from '@reduxjs/toolkit'
import datasSlice from './Slices/datasSlice'
import favoriteSlice from './Slices/favoriteSlice'
import basketSlice from './Slices/basketSlice'

export const store = configureStore({
  reducer: {
    datas: datasSlice,
    favorite: favoriteSlice,
    basket: basketSlice
  },
})