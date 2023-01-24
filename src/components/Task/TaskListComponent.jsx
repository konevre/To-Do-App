import React from "react";

import { useGetAllTodosQuery } from "../../store/apiSlice.js";

import TaskItemComponent from "./TaskItemComponent.jsx";

const TaskListComponent = () => {
    const { data: todos, isSuccess } = useGetAllTodosQuery();

    if (isSuccess) {
        return todos.map((task, i) => {
            return <TaskItemComponent task={task} i={i} key={i} />;
        });
    }
};

export default TaskListComponent;
