import { configureStore } from "@reduxjs/toolkit";

import menu from "./menuSlice.js";
import tasks from "./taskSlice.js";

const store = configureStore({ reducer: { menu, tasks } });

export default store;
