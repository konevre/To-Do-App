import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice.js";

import menu from "./menuSlice.js";
import tasks from "./todoSlice.js";
import lists from "./listSlice.js";
import tags from "./tagSlice.js";
import edit from "./editSlice.js";
import stickers from "./stickerSlice.js";
import calendar from "./calendarSlice.js";
import modal from "./modalSlice.js";

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
