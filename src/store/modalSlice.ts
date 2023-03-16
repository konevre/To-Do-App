import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO - переименовать modalTasks в другое, потому что там ток назание тэга или листа
interface Modal {
    isModalOpen: boolean;
    modalTasks: string | null;
}

const initialState: Modal = {
    isModalOpen: false,
    modalTasks: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        saveModalTasks: (state, action: PayloadAction<string>) => {
            state.modalTasks = action.payload;
        },
    },
});

const { actions, reducer } = modalSlice;

export default reducer;
export const { openModal, closeModal, saveModalTasks } = actions;
