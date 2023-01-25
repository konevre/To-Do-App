import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { showTask } from "../../store/todoSlice";
import { useUpdateTodoMutation } from "../../store/apiSlice";
import { showMenu } from "../../store/menuSlice.js";

import detail from "../../resources/icons/chevron.svg";
import calendar from "../../resources/icons/calendar-x.svg";

const TaskItemComponent = ({ task, i }) => {
    const dispatch = useDispatch();
    const [isDone, setTodoState] = useState(false);

    const lists = useSelector((state) => state.lists.lists);
    const taskList = lists.filter((item) => item.name === task.list)[0];
    console.log(task.name, task.list);

    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

    const onTask = () => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showTask(task));
    };

    const switchTodoState = () => {
        setTodoState(!isDone);
    };

    const subLength = task.subtasks.length,
        dueDate = task.due_date;

    const taskExtra =
        subLength > 0 || task.list.length > 0 || dueDate.length > 0;

    return (
        <div
            key={i}
            className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100"
        >
            <div className="flex w-4 items-center">
                <input
                    type="checkbox"
                    checked={isDone}
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
                <div className="col-span-3 col-start-2 ml-3 flex h-8  flex-wrap gap-4 sm:gap-x-6">
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
