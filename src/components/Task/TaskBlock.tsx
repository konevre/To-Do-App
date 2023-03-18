import React, { useEffect } from "react";

import useTodoBlock from "../../hooks/tasksHooks/useTodoBlock";
import { Filter } from "../../types";

import AddTaskComponent from "./AddTaskComponent";
import TaskListComponent from "./TaskListComponent";

interface ITaskBlockProps {
    filter: Filter;
    setHeaderNum?: (number: number) => void;
    id?: string;
    name?: string;
}

const TaskBlock: React.FC<ITaskBlockProps> = ({
    filter,
    setHeaderNum,
    ...props
}) => {
    const { todos, todosLen, filterName } = useTodoBlock(filter, props);

    useEffect(() => {
        if (setHeaderNum) setHeaderNum(todosLen);
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
