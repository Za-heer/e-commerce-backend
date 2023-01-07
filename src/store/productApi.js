import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";








export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/"}),
    endpoints:(builder)=>({
        getAllProducts : builder.query({
            query:()=>"product/getdata"
        }),
    }),
})

export const {useGetAllProductsQuery} = productApi;