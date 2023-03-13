import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        saveModalTasks: (state, action) => {
            state.modalTasks = action.payload;
        },
    },
});

const { actions, reducer } = modalSlice;

export default reducer;
export const { openModal, closeModal, saveModalTasks } = actions;
