// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";




// const STATUSES = {
//     IDLE : "idle",
//     LOADING : "loading",
//     ERROR : "error"
// }

// export const fetchProduct = createAsyncThunk ("product/getdata", async ()=>{
//     const data = await axios.get("http://localhost:5000/product/getdata");
//     console.log(data);
//     const products = data.json();
//     console.log(products);
//     return products;
// });

// const productSlice = createSlice({
//     name :"product",
//     initialState : {
//         data : [],
//         status :STATUSES
//     },
//     extraReducers : (builder) =>{
//         builder.addCase(fetchProduct.pending, (state,action) =>{
//             state.status = STATUSES.LOADING;
//         });
//         builder.addCase(fetchProduct.fulfilled, (state,action)=>{
//             state.status = STATUSES.IDLE;
//             state.data = action.payload;
//         });
//         builder.addCase(fetchProduct.rejected,(state,action)=>{
//             state.status = STATUSES.ERROR;
//         });
//     },
// });

// const {reducer} = productSlice;


// import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// export const productApi =  createApi({
//     reducerPath:"productApi",
//     baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000"}),
//     endpoints:(builder)=>({
//         getAllProducts : builder.query({
//             query:()=>"product/getdata"
//         }),
//     }),
// });


// export const { useGetAllProductsQuery } = productApi;


// export default reducer;