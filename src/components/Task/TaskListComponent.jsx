import React from "react";
import { useSelector } from "react-redux";

import TaskItemComponent from "./TaskItemComponent.jsx";

const TaskListComponent = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const content = tasks.map((task, i) => {
        return <TaskItemComponent task={task} i={i} key={i} />;
    });

    return content;
};

export default TaskListComponent;
