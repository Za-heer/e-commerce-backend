import {configureStore} from "@reduxjs/toolkit";
// import productSlice from "./productSlice"
import { productApi } from "./productSlice";

const store = configureStore({
    reducer:{
      // product: productReducer,
      [productApi.reducerPath]:productApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
      return getDefaultMiddleware().concat(productApi.middleware)
    }
  })

export default store;