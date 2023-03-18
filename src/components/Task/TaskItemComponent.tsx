import React from "react";

import detail from "../../resources/icons/chevron.svg";
import calendar from "../../resources/icons/calendar-x.svg";
import useTodoItem from "../../hooks/tasksHooks/useTodoItem";

import { Todo } from "../../types";

interface ITaskItemProps {
    task: Todo;
    i: number;
}

const TaskItemComponent: React.FC<ITaskItemProps> = ({ task, i }) => {
    const { taskList, switchTodoState, onTask, taskExtra, dueDate, subLength } =
        useTodoItem(task);

    return (
        <div
            // TODO - а здесь нахуя key?
            key={i}
            className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100"
        >
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
            {/* TODO - вынести в отдельный комп???? */}
            {taskExtra ? (
                <div className="col-span-3 col-start-2 ml-3 flex h-fit  flex-wrap gap-4 sm:gap-x-6">
                    {dueDate.length > 0 && (
                        <div className="flex items-center">
                            <img src={calendar} alt="subtask" className="h-4" />
                            <div className="ml-2 text-xs font-semibold text-neutral-600">
                                {dueDate}
                            </div>
                        </div>
                    )}
                    {subLength > 0 && (
                        <div className="flex items-center">
                            <div className="h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                                {subLength}
                            </div>
                            <div className="ml-2 text-xs font-semibold text-neutral-600">
                                Subtasks
                            </div>
                        </div>
                    )}
                    {taskList && (
                        <div className="flex items-center">
                            <div
                                className={`h-4 w-4 rounded ${taskList.color} text-center text-xs font-semibold text-neutral-600`}
                            ></div>
                            <div className="ml-3 hidden text-xs font-semibold text-neutral-600 sm:block">
                                {taskList.name}
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default TaskItemComponent;
