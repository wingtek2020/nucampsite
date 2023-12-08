import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
  },
});

console.log('state:' + store.getState());
