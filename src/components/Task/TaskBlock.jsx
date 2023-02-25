import React, { useEffect } from "react";

import useFilterTasks from "../../hooks/useFilterTasks.js";

import TaskItemComponent from "./TaskItemComponent.jsx";
import AddTaskComponent from "./AddTaskComponent.jsx";

const TaskBlock = ({ filter, setNum, ...props }) => {
    const todos = useFilterTasks(filter, props.id);
    const todosLen = todos.length;

    const filterName =
        filter === "today" || filter === "tomorrow" ? filter : `this ${filter}`;

    useEffect(() => {
        if (setNum) setNum(todosLen);
    }, [todosLen]);

    return (
        <>
            <AddTaskComponent />
            {(todosLen !== 0 &&
                todos.map((task, i) => {
                    return <TaskItemComponent task={task} i={i} key={i} />;
                })) || (
                <div className="mt-8 flex items-center justify-center text-lg font-semibold">
                    {`No tasks for ${filterName}`}
                </div>
            )}
        </>
    );
};

export default TaskBlock;
