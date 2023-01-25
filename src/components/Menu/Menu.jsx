import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { showMenu } from "../../store/menuSlice.js";

import upcoming from "../../resources/icons/chevrons-right.svg";
import today from "../../resources/icons/list-check.svg";
import calendar from "../../resources/icons/calendar-days.svg";
import note from "../../resources/icons/note.svg";
import settings from "../../resources/icons/sliders.svg";
import xmark from "../../resources/icons/xmark.svg";

import ListComponent from "./Lists/ListComponent.jsx";
import TagsComponent from "./Tags/TagsComponent.jsx";

const MenuComponent = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

    const onMenu = () => {
        dispatch(showMenu());
    };

    const isHidden = isMenuOpen
        ? "absolute top-0 z-10 translate-x-0 sm:static sm:z-0"
        : "absolute top-0 -z-10 -translate-x-full delay-300 sm:static sm:z-0 sm:hidden";

    return (
        <div
            className={`${isHidden} h-full w-full transform bg-neutral-200 transition duration-300 ease-in-out sm:basis-1/3 sm:transform-none sm:bg-slate-100 lg:basis-1/4`}
        >
            <div className="m-mobile h-full overflow-y-auto bg-neutral-200 p-4 sm:rounded-2xl">
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
                <div className="mt-3 h-px bg-neutral-300"></div>
                <ListComponent />
                <div className="mt-3 h-px bg-neutral-300"></div>
                <TagsComponent />
                <div className="mt-6 h-px bg-neutral-300"></div>
                <div className="mt-4 mb-2 ml-3 flex h-5 items-center gap-x-3">
                    <img src={settings} alt="settings" className="h-3/4" />
                    <div className="text-sm">Settings</div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
