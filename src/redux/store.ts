import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";
import dataSlice from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    data: dataSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
