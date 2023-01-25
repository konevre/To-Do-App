import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    isTodoOpen: [true, null],
};

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTodos: (state, action) => {
            state.todos = action.payload;
        },
        showTask: (state, action) => {
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
export const { showTask, closeTodo, makeTodoNull, saveTodos, switchTodoState } =
    actions;
