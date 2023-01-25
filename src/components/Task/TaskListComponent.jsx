import React from "react";

import { useGetAllTodosQuery } from "../../store/apiSlice.js";

import useGetTodos from "../../hooks/useGetTodos.js";

import TaskItemComponent from "./TaskItemComponent.jsx";

const TaskListComponent = () => {
    const { todos } = useGetTodos();

    return todos.map((task, i) => {
        return <TaskItemComponent task={task} i={i} key={i} />;
    });
};

export default TaskListComponent;
