import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";
import { firebaseApi } from "../firebase/services/firebaseApi";

export const store = configureStore({
    reducer: {
        homeSlice,
        [firebaseApi.reducerPath]: firebaseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(firebaseApi.middleware),
});
