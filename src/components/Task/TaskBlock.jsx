import React from "react";

import useLayout from "../../hooks/useLayout.js";

import plus from "../../resources/icons/plus.svg";

import TaskListComponent from "./TaskListComponent.jsx";

const TaskBlock = () => {
    const { onTask } = useLayout();
    return (
        <>
            <div
                onClick={onTask}
                className="flex h-12 cursor-pointer flex-row rounded-lg border border-neutral-300 p-3.5"
            >
                <img src={plus} alt="plus" className="h-full" />
                <div className="ml-3 flex items-center truncate text-base text-neutral-500">
                    Add New Task
                </div>
            </div>
            <TaskListComponent />
        </>
    );
};

export default TaskBlock;
