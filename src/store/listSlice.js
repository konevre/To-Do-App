import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
};

const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        saveLists: (state, action) => {
            state.lists = action.payload;
        },
    },
});

const { actions, reducer } = listSlice;

export default reducer;
export const { saveLists } = actions;
