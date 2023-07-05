import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productsSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./authSlice";
import { DataApi } from "../components/service/DataApi";
import { authApi } from "../components/service/AuthApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  product: ProductSlice,
  [authApi.reducerPath]: authApi.reducer,
  [DataApi.reducerPath]: DataApi.reducer,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,DataApi.middleware),
});
