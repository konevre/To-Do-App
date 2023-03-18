import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoApiSlice } from "./api/apiEndpoints/todoEndpoints";
import { Todo } from "../types";

interface ITodoSlice {
    todos: Todo[];
    todayNum: number;
    upcomingNum: number;
}

const initialState: ITodoSlice = {
    todos: [],
    todayNum: 0,
    upcomingNum: 0,
};

interface IChangeNumAction {
    name: keyof Omit<ITodoSlice, "todos">;
    num: number;
}

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        changeNum: (state, action: PayloadAction<IChangeNumAction>) => {
            state[action.payload.name] = action.payload.num;
        },
    },
});

const { actions, reducer } = todoSlice;

export default reducer;
export const { saveTodos, changeNum } = actions;
