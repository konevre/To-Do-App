import { createSlice } from "@reduxjs/toolkit";

interface Menu {
    isMenuOpen: boolean;
}

const initialState: Menu = {
    isMenuOpen: false,
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
