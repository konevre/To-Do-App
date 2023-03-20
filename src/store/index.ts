import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "./api/apiSlice";

import menu from "./menuSlice";
import tasks from "./todoSlice";
import lists from "./listSlice";
import tags from "./tagSlice";
import edit from "./editSlice";
import stickers from "./stickerSlice";
import calendar from "./calendarSlice";
import modal from "./modalSlice";

const rootReducer = combineReducers({
    menu,
    tasks,
    lists,
    tags,
    edit,
    stickers,
    calendar,
    modal,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["stickers"],
    blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(apiSlice.middleware),
});

export const persister = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
