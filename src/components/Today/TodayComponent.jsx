import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMenu } from "../../store/menuSlice.js";

import bars from "../../resources/icons/bars.svg";
import plus from "../../resources/icons/plus.svg";
import detail from "../../resources/icons/chevron.svg";
import calendar from "../../resources/icons/calendar-x.svg";

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
            <div className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100">
                <div className="flex w-4 items-center">
                    <div className="h-4 w-4 rounded border border-neutral-300"></div>
                </div>
                <div className="col-span-3 col-start-2 my-auto ml-3 truncate text-base text-neutral-600 ">
                    Renew driver's license
                </div>
                <div className="ml-auto flex h-8 cursor-pointer items-center">
                    <img src={detail} alt="plus" className="h-1/2" />
                </div>
            </div>
            <div className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100">
                <div className="flex w-4 items-center">
                    <div className="h-4 w-4 rounded border border-neutral-300"></div>
                </div>
                <div className="col-span-3 col-start-2 my-auto ml-3 truncate text-base text-neutral-600 ">
                    Renew driver's license
                </div>
                <div className="ml-auto flex h-8 cursor-pointer items-center">
                    <img src={detail} alt="plus" className="h-1/2" />
                </div>
            </div>
            <div className="min-h-12 grid grid-cols-task grid-rows-1 border border-slate-100 border-b-neutral-300 py-2 px-3.5 last:border-slate-100">
                <div className="flex w-4 items-center">
                    <div className="h-4 w-4 rounded border border-neutral-300"></div>
                </div>
                <div className="col-span-3 col-start-2 my-auto ml-3 truncate text-base text-neutral-600 ">
                    Renew driver's license
                </div>
                <div className="ml-auto flex h-8 cursor-pointer items-center">
                    <img src={detail} alt="plus" className="h-1/2" />
                </div>
                {/* SUBSECTION */}
                <div className="col-span-3 col-start-2 ml-3 flex h-8 gap-x-4 sm:gap-x-6">
                    <div className="flex items-center">
                        <img src={calendar} alt="subtask" className="h-1/2" />
                        <div className="ml-2 text-xs font-semibold text-neutral-600">
                            22-10-23
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                            1
                        </div>
                        <div className="ml-2 text-xs font-semibold text-neutral-600">
                            Subtasks
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="h-4 w-4 rounded bg-red-400 text-center text-xs font-semibold text-neutral-600"></div>
                        <div className="ml-3 hidden text-xs font-semibold text-neutral-600 sm:block">
                            List 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayComponent;
