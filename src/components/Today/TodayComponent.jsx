import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMenu } from "../../store/menuSlice.js";

import TaskListComponent from "../Task/TaskListComponent.jsx";

import bars from "../../resources/icons/bars.svg";
import plus from "../../resources/icons/plus.svg";

const TodayComponent = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

    const onMenu = () => {
        dispatch(setMenu());
    };

    const basis = isMenuOpen
        ? "absolute top-0 -z-10 translate-x-full delay-300 sm:block sm:static sm:basis-2/3 lg:basis-3/4 sm:z-0"
        : "absolute top-0 z-10 translate-x-0 sm:basis-full sm:static lg:basis-full sm:z-0";

    return (
        <div
            className={`h-full w-full transform bg-slate-100 p-4 transition duration-300 ease-in-out sm:transform-none sm:p-6 ${basis}`}
        >
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
            <div className="mt-8 flex h-12 cursor-pointer flex-row rounded-lg border border-neutral-300 p-3.5">
                <img src={plus} alt="plus" className="h-full" />
                <div className="ml-3 flex items-center truncate text-base text-neutral-500">
                    Add New Task
                </div>
            </div>
            {/* TASK ITEM */}
            <TaskListComponent />
        </div>
    );
};

export default TodayComponent;
