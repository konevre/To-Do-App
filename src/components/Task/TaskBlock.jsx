import React, { useEffect } from "react";

import useFilterTasks from "../../hooks/useFilterTasks.js";

import TaskItemComponent from "./TaskItemComponent.jsx";
import AddTaskComponent from "./AddTaskComponent.jsx";

const TaskBlock = ({ filter, setNum, ...props }) => {
    const todos = useFilterTasks(filter, props.id);

    useEffect(() => {
        if (setNum) setNum(todos.length);
    }, [todos.length]);

    return (
        <>
            <AddTaskComponent />
            {todos &&
                todos.map((task, i) => {
                    return <TaskItemComponent task={task} i={i} key={i} />;
                })}
        </>
    );
};

export default TaskBlock;
