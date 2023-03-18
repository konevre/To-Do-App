import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo, Sticker } from "../types";

interface IEdit {
    edit: {
        isOpen: boolean;
        task: null | Todo;
        sticker: null | Sticker;
    };
}

const initialState: IEdit = {
    edit: { isOpen: false, task: null, sticker: null },
};

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        showTodo: (state, action: PayloadAction<Todo | null>) => {
            state.edit = {
                isOpen: true,
                task: action.payload,
                sticker: null,
            };
        },
        showSticker: (state, action: PayloadAction<Sticker | null>) => {
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
export const { showTodo, closeEdit, makeEditNull, showSticker } = actions;
