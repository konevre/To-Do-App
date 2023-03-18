import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { todayDate } from "../hooks/calendarHooks/useLuxon";
import { Range } from "../types";

interface ICalendar {
    activeState: Range;
    today: string;
}

const initialState: ICalendar = {
    activeState: "week",
    today: todayDate,
};

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<Range>) => {
            state.activeState = action.payload;
        },
        changeNow: (state, action: PayloadAction<string>) => {
            state.today = action.payload;
        },
    },
});

const { actions, reducer } = calendarSlice;

export default reducer;
export const { changeState, changeNow } = actions;
