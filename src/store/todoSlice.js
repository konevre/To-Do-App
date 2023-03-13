import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    todayNum: 0,
    upcomingNum: 0,
};

const todoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTodos: (state, action) => {
            state.todos = action.payload;
        },
        changeNum: (state, action) => {
            state[action.payload.name] = action.payload.num;
        },
    },
});

const { actions, reducer } = todoSlice;

export default reducer;
export const { saveTodos, changeNum } = actions;
