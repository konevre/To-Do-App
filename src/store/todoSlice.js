import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTodos: (state, action) => {
            state.todos = action.payload;
        },
    },
});

const { actions, reducer } = todoSlice;

export default reducer;
export const { saveTodos } = actions;
