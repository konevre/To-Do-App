import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: true,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        showMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

const { actions, reducer } = menuSlice;

export default reducer;
export const { showMenu } = actions;
