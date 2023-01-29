import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditOpen: { isOpen: false, task: null, sticker: null },
};

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        showEdit: (state, action) => {
            state.isEditOpen = {
                isOpen: true,
                task: action.payload,
                sticker: null,
            };
        },
        showSticker: (state, action) => {
            state.isEditOpen = {
                isOpen: true,
                task: null,
                sticker: action.payload,
            };
        },
        closeEdit: (state) => {
            state.isEditOpen = { isOpen: false, task: null, sticker: null };
        },
        makeEditNull: (state) => {
            const isEditOpen = state.isEditOpen;
            state.isEditOpen = { ...isEditOpen, task: null, sticker: null };
        },
    },
});

const { actions, reducer } = editSlice;

export default reducer;
export const { showEdit, closeEdit, makeEditNull, showSticker } = actions;
