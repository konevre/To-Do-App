import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo, Sticker } from "../types";

interface Edit {
    edit: {
        isOpen: boolean;
        task: null | Todo;
        sticker: null | Sticker;
    };
}

const initialState: Edit = {
    edit: { isOpen: false, task: null, sticker: null },
};

// TODO - переименовать showEdit в showTodo
const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        showEdit: (state, action: PayloadAction<Todo>) => {
            state.edit = {
                isOpen: true,
                task: action.payload,
                sticker: null,
            };
        },
        showSticker: (state, action: PayloadAction<Sticker>) => {
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
