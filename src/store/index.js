import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice.js";

import menu from "./menuSlice.js";
import tasks from "./todoSlice.js";
import lists from "./listSlice.js";

const store = configureStore({
    reducer: { menu, tasks, lists, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
