import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Sticker } from "../types";

interface IStickerSlice {
    stickers: Sticker[];
}
const initialState: IStickerSlice = {
    stickers: [
        {
            name: "Rent a house",
            description: "Call the real estate manager",
            color: "bg-red-300",
            id: "1925203c-9151-4153-bce7-5c068826c81a",
        },
        {
            name: "Call Saul",
            description: "Tell him to buy milk",
            color: "bg-yellow-300",
            id: "1925203c-9151-4153-bce7-5c068826c81b",
        },
        {
            name: "Buy milk",
            description: "Protein milk",
            color: "bg-emerald-300",
            id: "1925203c-9151-4153-bce7-5c068826c81c",
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
