import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Sticker } from "../types";

interface IStickerSlice {
    stickers: Sticker[];
}
const initialState: IStickerSlice = {
    stickers: [
        {
            name: "Social Media",
            description:
                "1) Plan social content, 2) Build content calendar, 3) Plan promotion and distribution",
            color: "bg-red-300",
            id: uuidv4(),
        },
        {
            name: "Better Call Saul",
            description: "Start watching the series with Drake",
            color: "bg-yellow-300",
            id: uuidv4(),
        },
        {
            name: "Email A/B Tests",
            description: "- Subject lines, Sender, CTA, Sending times",
            color: "bg-emerald-300",
            id: uuidv4(),
        },
        {
            name: "Banner Ads",
            description: "- Write down the notes for Banner ADS",
            color: "bg-indigo-300",
            id: uuidv4(),
        },
    ],
};

const stickerSlice = createSlice({
    name: "stickers",
    initialState,
    reducers: {
        addSticker: (state, action: PayloadAction<Sticker>) => {
            state.stickers = [...state.stickers, action.payload];
        },
        updateSticker: (state, action: PayloadAction<Sticker>) => {
            const { id, ...rest } = action.payload;
            state.stickers = state.stickers.map((sticker) =>
                sticker.id === id ? { ...sticker, ...rest } : sticker
            );
        },
        deleteSticker: (state, action: PayloadAction<string>) => {
            state.stickers = state.stickers.filter(
                (sticker) => sticker.id !== action.payload
            );
        },
        reorderSticker: (state, action: PayloadAction<Sticker[]>) => {
            state.stickers = action.payload;
        },
    },
});

const { actions, reducer } = stickerSlice;

export default reducer;
export const { addSticker, updateSticker, reorderSticker, deleteSticker } =
    actions;
