import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice.js";

import menu from "./menuSlice.js";
import tasks from "./todoSlice.js";
import lists from "./listSlice.js";
import tags from "./tagSlice.js";
import stickers from "./stickerSlice.js";

const store = configureStore({
    reducer: {
        menu,
        tasks,
        lists,
        tags,
        stickers,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
