import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./Reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["tabelDashboard3", "validateForm", "penyaringanAwal"],
  blacklist: ["validateForm"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export const persistedStore = persistStore(store);
