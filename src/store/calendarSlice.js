import { createSlice } from "@reduxjs/toolkit";

import { today } from "../hooks/calendarHooks/useLuxon.js";

const initialState = {
    activeState: "day",
    today,
};

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.activeState = action.payload;
        },
        changeNow: (state, action) => {
            state.today = action.payload;
        },
    },
});

const { actions, reducer } = calendarSlice;

export default reducer;
export const { changeState, changeNow } = actions;
