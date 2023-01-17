import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            name: "Renew driver's license",
            descr: "",
            list: { name: "", color: "" },
            dueDate: "",
            tag: [],
            subtasks: [],
            done: true,
        },
        {
            name: "Call grandparents",
            descr: "",
            list: { name: "", color: "" },
            dueDate: "21-10-12",
            tag: [],
            subtasks: ["Order flowers"],
            done: true,
        },
        {
            name: "Resign from work",
            descr: "",
            list: { name: "Work", color: "bg-cyan-300" },
            dueDate: "",
            tag: [],
            subtasks: [],
            done: false,
        },
        {
            name: "Order food",
            descr: "",
            list: { name: "Personal", color: "bg-red-400" },
            dueDate: "21-10-2023",
            tag: [],
            subtasks: ["Order flowers", "Buy cake"],
            done: false,
        },
    ],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = state.tasks.push(action.payload);
        },
        taskToggler: (state, action) => {
            state.tasks[action.payload].done =
                !state.tasks[action.payload].done;
        },
    },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const { addTask, taskToggler } = actions;
