import React from "react";

import detail from "../../resources/icons/chevron.svg";
import useTodoItem from "../../hooks/tasksHooks/useTodoItem";

import TaskExtraComponent from "./TaskExtraComponent";

import { Todo } from "../../types";

interface ITaskItemProps {
    task: Todo;
    i: number;
}

const TaskItemComponent: React.FC<ITaskItemProps> = ({ task, i }) => {
    const { taskList, switchTodoState, onTask, taskExtra, dueDate, subLength } =
        useTodoItem(task);

    return (
        <div className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100">
            <div className="flex w-4 items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={switchTodoState}
                />
            </div>
            <div className="col-span-3 col-start-2 my-auto ml-3 truncate text-base text-neutral-600 ">
                {task.name}
            </div>
            <div className="ml-auto flex h-8 cursor-pointer items-center">
                <img
                    src={detail}
                    alt="plus"
                    className="h-1/2"
                    onClick={onTask}
                />
            </div>
            {taskExtra ? (
                <TaskExtraComponent
                    dueDate={dueDate}
                    taskList={taskList}
                    subLength={subLength}
                />
            ) : null}
        </div>
    );
};

export default TaskItemComponent;
