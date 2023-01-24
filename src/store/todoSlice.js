import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTodoOpen: [true, null],
};

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        showTodo: (state, action) => {
            state.isTodoOpen = [true, action.payload];
        },
        closeTodo: (state) => {
            state.isTodoOpen = [false, null];
        },
        makeTodoNull: (state) => {
            state.isTodoOpen = [state.isTodoOpen[0], null];
        },
    },
});

const { actions, reducer } = todoSlice;

export default reducer;
export const { showTodo, closeTodo, makeTodoNull } = actions;
