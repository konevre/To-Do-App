import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModal {
    isModalOpen: boolean;
    modalTasks: string | null;
}

const initialState: IModal = {
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
