// api/firebaseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_URL } from "../base_URL";

export const firebaseApi = createApi({
    reducerPath: "firebaseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_URL,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json",
        }),

        getProducts: builder.query({
            query: () => "products.json",
        }),

        getImage: builder.query({
            query: () => "image.json",
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetImageQuery,
} = firebaseApi;
