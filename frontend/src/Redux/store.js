import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './Slices/favoriteSlice'
import basketSlice from './Slices/basketSlice'
import productSlice from './Slices/productSlice'
import veterinarSlice  from './Slices/veterinarSlice'
import groomerSlice from './Slices/groomerSlice'
import groomingSlice from './Slices/groomingSlice'
import userSlice from './Slices/userSlice'


export const store = configureStore({
  reducer: {
    product: productSlice,
    favorite: favoriteSlice,
    basket: basketSlice,
    veterinar: veterinarSlice,
    groomer: groomerSlice,
    grooming: groomingSlice,
    user: userSlice
  },
})