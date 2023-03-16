import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tag } from "../types";

interface TagSlice {
    tags: Tag[];
}

const initialState: TagSlice = {
    tags: [],
};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        saveTags: (state, action: PayloadAction<Tag[]>) => {
            state.tags = action.payload;
        },
    },
});

const { actions, reducer } = tagsSlice;

export default reducer;
export const { saveTags } = actions;
