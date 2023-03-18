import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tag } from "../types";

interface ITagSlice {
    tags: Tag[];
}

const initialState: ITagSlice = {
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
