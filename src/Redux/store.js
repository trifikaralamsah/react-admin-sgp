import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./Reducers/rootReducer";
// import tabelDashboard1 from "./Reducers/Dashboard/tabelDashboard1";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tabelDashboard1", "tabelDashboard2", "tabelDashboard3"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export const persistedStore = persistStore(store);
