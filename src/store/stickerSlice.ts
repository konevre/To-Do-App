import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Sticker } from "../types";

interface StickerSlice {
    stickers: Sticker[];
}

const initialState: StickerSlice = {
    stickers: [],
};

const stickerSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        saveStickers: (state, action: PayloadAction<Sticker[]>) => {
            state.stickers = action.payload;
        },
    },
});

const { actions, reducer } = stickerSlice;

export default reducer;
export const { saveStickers } = actions;
