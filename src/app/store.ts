import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counter_slicer";
import { apiSlice } from "../feature/dogs/dog-api-slice";

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>