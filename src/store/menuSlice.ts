import { createSlice } from "@reduxjs/toolkit";

interface IMenu {
    isMenuOpen: boolean;
}

const initialState: IMenu = {
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
