import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stickers: [],
};

const stickerSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        saveStickers: (state, action) => {
            state.stickers = action.payload;
        },
    },
});

const { actions, reducer } = stickerSlice;

export default reducer;
export const { saveStickers } = actions;
