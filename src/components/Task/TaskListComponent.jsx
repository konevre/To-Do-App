import React from "react";

import TaskItemComponent from "./TaskItemComponent.jsx";

const TaskListComponent = ({ todos }) => {
    return todos.map((task, i) => {
        return <TaskItemComponent task={task} i={i} key={i} />;
    });
};

export default TaskListComponent;
