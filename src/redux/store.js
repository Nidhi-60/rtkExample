import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "./counterSlice";
import { userApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
