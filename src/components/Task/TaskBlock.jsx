import React, { useEffect } from "react";

import useTodoBlock from "../../hooks/tasksHooks/useTodoBlock.js";

import AddTaskComponent from "./AddTaskComponent.jsx";
import TaskListComponent from "./TaskListComponent.jsx";

const TaskBlock = ({ filter, setNum, ...props }) => {
    const { todos, todosLen, filterName } = useTodoBlock(filter, props);

    useEffect(() => {
        if (setNum) setNum(todosLen);
    }, [todosLen]);

    return (
        <>
            <AddTaskComponent />
            {(todosLen !== 0 && <TaskListComponent todos={todos} />) || (
                <div className="mt-8 flex items-center justify-center text-lg font-semibold">
                    {`No tasks for ${filterName}`}
                </div>
            )}
        </>
    );
};

export default TaskBlock;
