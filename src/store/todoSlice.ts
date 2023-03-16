import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../types";

interface TodoSlice {
    todos: Todo[];
    todayNum: number;
    upcomingNum: number;
}

const initialState: TodoSlice = {
    todos: [],
    todayNum: 0,
    upcomingNum: 0,
};

interface ChangeNumAction {
    name: keyof Omit<TodoSlice, "todos">;
    num: number;
}

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        changeNum: (state, action: PayloadAction<ChangeNumAction>) => {
            state[action.payload.name] = action.payload.num;
        },
    },
});

const { actions, reducer } = todoSlice;

export default reducer;
export const { saveTodos, changeNum } = actions;
