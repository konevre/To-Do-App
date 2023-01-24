/* eslint-disable indent */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { showMenu } from "../../store/menuSlice.js";
import { closeTodo, showTodo } from "../../store/todoSlice.js";

import TaskListComponent from "../Task/TaskListComponent.jsx";

import bars from "../../resources/icons/bars.svg";
import plus from "../../resources/icons/plus.svg";

const TodayComponent = () => {
    const dispatch = useDispatch();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
    const { isTodoOpen } = useSelector((state) => state.tasks);

    const onMenu = () => {
        if (isLessThan1024 && isTodoOpen[0]) {
            dispatch(closeTodo());
        }
        dispatch(showMenu());
    };

    const onTask = () => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showTodo(null));
    };

    const basis =
        isMenuOpen && isTodoOpen[0]
            ? "sm:basis-5/12" // menu, today, task
            : isMenuOpen
            ? "absolute top-0 -z-10 translate-x-full delay-300 sm:block sm:static sm:basis-2/3 lg:basis-3/4 sm:z-0" // menu + today
            : isTodoOpen[0]
            ? "sm:basis-2/3" // today + task
            : "absolute top-0 z-10 translate-x-0 sm:basis-full sm:static lg:basis-full sm:z-0"; // today only

    return (
        <div
            className={`h-full w-full transform bg-slate-100 transition duration-300 ease-in-out sm:transform-none ${basis}`}
        >
            <div className="h-full w-full overflow-y-auto p-4">
                <div className="flex items-center">
                    {!isMenuOpen && (
                        <img
                            src={bars}
                            alt="bars"
                            className="h-5 cursor-pointer"
                            onClick={onMenu}
                        />
                    )}

                    <div
                        className={`${
                            isMenuOpen ? "ml-0" : "ml-8"
                        } flex items-center text-2xl font-semibold sm:text-4xl`}
                    >
                        Today
                    </div>
                    <div className="font-base  ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 sm:ml-5 sm:h-10 sm:w-10">
                        5
                    </div>
                </div>
                {/* ADD TASK */}
                <div
                    onClick={onTask}
                    className="mt-8 flex h-12 cursor-pointer flex-row rounded-lg border border-neutral-300 p-3.5"
                >
                    <img src={plus} alt="plus" className="h-full" />
                    <div className="ml-3 flex items-center truncate text-base text-neutral-500">
                        Add New Task
                    </div>
                </div>
                <TaskListComponent />
            </div>
        </div>
    );
};

export default TodayComponent;
