import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: { isOpen: false, task: null, sticker: null },
};

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        showEdit: (state, action) => {
            state.edit = {
                isOpen: true,
                task: action.payload,
                sticker: null,
            };
        },
        showSticker: (state, action) => {
            state.edit = {
                isOpen: true,
                task: null,
                sticker: action.payload,
            };
        },
        closeEdit: (state) => {
            state.edit = { isOpen: false, task: null, sticker: null };
        },
        makeEditNull: (state) => {
            const edit = state.edit;
            state.edit = { ...edit, task: null, sticker: null };
        },
    },
});

const { actions, reducer } = editSlice;

export default reducer;
export const { showEdit, closeEdit, makeEditNull, showSticker } = actions;
