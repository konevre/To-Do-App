import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";

import menu from "./menuSlice";
import tasks from "./todoSlice";
import lists from "./listSlice";
import tags from "./tagSlice";
import edit from "./editSlice";
import stickers from "./stickerSlice";
import calendar from "./calendarSlice";
import modal from "./modalSlice";

const store = configureStore({
    reducer: {
        menu,
        tasks,
        lists,
        tags,
        edit,
        stickers,
        calendar,
        modal,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
