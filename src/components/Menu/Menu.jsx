import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setMenu } from "../../store/menuSlice.js";

import upcoming from "../../resources/icons/chevrons-right.svg";
import today from "../../resources/icons/list-check.svg";
import calendar from "../../resources/icons/calendar-days.svg";
import note from "../../resources/icons/note.svg";
import plus from "../../resources/icons/plus.svg";
import settings from "../../resources/icons/sliders.svg";
import xmark from "../../resources/icons/xmark.svg";

const MenuComponent = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

    const onMenu = () => {
        dispatch(setMenu());
    };

    const isHidden = isMenuOpen
        ? "absolute top-0 z-10 translate-x-0 sm:static sm:z-0 sm:pr-0"
        : "absolute top-0 -z-10 -translate-x-full delay-300 sm:static sm:z-0 sm:hidden";

    return (
        <div
            className={`${isHidden} min-h-full w-full transform bg-neutral-200 p-4 transition duration-300 ease-in-out sm:basis-1/3 sm:transform-none sm:bg-slate-100 sm:p-6 lg:basis-1/4`}
        >
            <div className="min-h-full bg-neutral-200 sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between">
                    <div className="font-semibold sm:text-xl">Menu</div>
                    <img
                        src={xmark}
                        alt="close"
                        className="h-5 cursor-pointer"
                        onClick={onMenu}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="mt-5 flex h-10 w-full flex-row rounded-lg border border-neutral-300 bg-neutral-200 p-3.5 text-sm"
                />
                {/* TASKS */}
                <div className="mt-5 ml-3 text-xs font-semibold uppercase">
                    Tasks
                </div>
                <div className="mt-3 flex flex-col">
                    <div className="flex h-12 items-center rounded px-5">
                        <img src={upcoming} alt="upcoming" className="w-3" />
                        <div className="ml-3 text-sm font-normal">Upcoming</div>
                        <div className="ml-auto h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                            12
                        </div>
                    </div>
                    {/* ACTIVE  */}
                    <div className="flex h-10 items-center rounded-lg bg-neutral-300 px-5">
                        <img src={today} alt="upcoming" className="w-3.5" />
                        <div className="ml-2.5 text-sm font-normal">Today</div>
                        <div className="ml-auto h-4 w-6 rounded bg-slate-100 text-center text-xs font-semibold text-neutral-600">
                            5
                        </div>
                    </div>
                    <div className="flex h-10 items-center rounded px-5">
                        <img src={calendar} alt="upcoming" className="w-3" />
                        <div className="ml-3 text-sm font-normal">Calendar</div>
                    </div>
                    <div className="flex h-10 items-center rounded px-5">
                        <img src={note} alt="upcoming" className="w-3" />
                        <div className="ml-3 text-sm font-normal">
                            Sticky Wall
                        </div>
                    </div>
                </div>
                {/* DIVIDER */}
                <div className="mt-3 h-px bg-neutral-300"></div>
                {/* LISTS */}
                <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                    Lists
                </div>
                <div className="mt-3 flex flex-col">
                    <div className="flex h-10 items-center rounded-lg px-5">
                        <div className="h-4 w-4 rounded bg-cyan-400 text-center text-xs font-semibold text-neutral-600"></div>
                        <div className="ml-2.5 text-sm font-normal">
                            Personal
                        </div>
                        <div className="ml-auto h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                            5
                        </div>
                    </div>
                    <div className="flex h-10 items-center rounded-lg px-5">
                        <div className="h-4 w-4 rounded bg-red-400 text-center text-xs font-semibold text-neutral-600"></div>
                        <div className="ml-2.5 text-sm font-normal">Work</div>
                        <div className="ml-auto h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                            2
                        </div>
                    </div>
                    <div className="flex h-10 items-center rounded-lg px-5">
                        <div className="h-4 w-4 rounded bg-amber-400 text-center text-xs font-semibold text-neutral-600"></div>
                        <div className="ml-2.5 text-sm font-normal">List 1</div>
                        <div className="ml-auto h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                            9
                        </div>
                    </div>
                    <div className="flex h-10 cursor-pointer items-center rounded-lg px-5">
                        <img src={plus} alt="upcoming" className="w-3" />
                        <div className="ml-2.5 text-sm font-normal">
                            Add New List
                        </div>
                    </div>
                </div>
                {/* DIVIDER */}
                <div className="mt-3 h-px bg-neutral-300"></div>
                {/* TAGS */}
                <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                    Tags
                </div>
                <div className="mt-3 flex min-h-min flex-wrap gap-1">
                    <div className="flex h-full items-center justify-center rounded bg-sky-200 px-3 text-sm">
                        Tag 1
                    </div>
                    <div className="flex h-full items-center justify-center rounded bg-pink-200 px-3 text-sm">
                        Tag 2
                    </div>
                    <div className="flex h-full items-center justify-center rounded bg-neutral-300 px-3 text-sm">
                        + Add Tag
                    </div>
                </div>
                {/* DIVIDER */}
                <div className="mt-6 h-px bg-neutral-300"></div>
                <div className="mt-4 mb-2 ml-3 flex h-5 items-center gap-x-3">
                    <img src={settings} alt="settings" className="h-3/4" />
                    <div className="text-sm">Settings</div>
                </div>
                {/* DIVIDER */}
            </div>
        </div>
    );
};

export default MenuComponent;
