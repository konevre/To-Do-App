import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice.js";

import menu from "./menuSlice.js";
import tasks from "./todoSlice.js";

const store = configureStore({
    reducer: { menu, tasks, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
