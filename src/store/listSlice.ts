import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { List } from "../types";

interface IListSlice {
    lists: List[];
}

const initialState: IListSlice = {
    lists: [],
};

const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        saveLists: (state, action: PayloadAction<List[]>) => {
            state.lists = action.payload;
        },
    },
});

const { actions, reducer } = listSlice;

export default reducer;
export const { saveLists } = actions;
