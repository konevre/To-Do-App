import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = state.tasks.push(action.payload);
        },
    },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const { addTask } = actions;
