/* eslint-disable indent */
import React from "react";

import useLayout from "../../hooks/useLayout.js";

import TaskListComponent from "../Task/TaskListComponent.jsx";

import bars from "../../resources/icons/bars.svg";
import plus from "../../resources/icons/plus.svg";

const TodayComponent = () => {
    const { onTask, onMenu, isMenuOpen } = useLayout();

    return (
        <>
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
        </>
    );
};

export default TodayComponent;
