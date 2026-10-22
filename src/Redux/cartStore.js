import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/ProductSlice'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'

const cartStore =configureStore({
      reducer:{
            productReducer:productSlice,
            wishlistReducer:wishlistSlice,
            cartStoreReducer:cartSlice,

      }
})
export default cartStore
