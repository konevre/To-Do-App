import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        saveTags: (state, action) => {
            state.tags = action.payload;
        },
    },
});

const { actions, reducer } = tagsSlice;

export default reducer;
export const { saveTags } = actions;
