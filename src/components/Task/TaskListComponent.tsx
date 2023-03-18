import React from "react";

import TaskItemComponent from "./TaskItemComponent";

import { Todo } from "../../types";

interface ITaskListProps {
    todos: Todo[];
}

const TaskListComponent = ({ todos }: ITaskListProps) => {
    return (
        <>
            {todos.map((task, i) => {
                return <TaskItemComponent task={task} i={i} key={task.id} />;
            })}
        </>
    );
};

export default TaskListComponent;
