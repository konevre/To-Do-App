import React from "react";

import { showMenu } from "../../store/menuSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import upcoming from "../../resources/icons/chevrons-right.svg";
import today from "../../resources/icons/list-check.svg";
import calendar from "../../resources/icons/calendar-days.svg";
import note from "../../resources/icons/note.svg";
import xmark from "../../resources/icons/xmark.svg";
import useFilterTasks from "../../hooks/tasksHooks/useFilterTasks";
import SearchFormComponent from "../Forms/SearchFormComponent";

import ListComponent from "./Lists/ListComponent";
import TagsComponent from "./Tags/TagsComponent";
import CustomLink from "./CustomLink/CustomLinkComponent";

const MenuComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const isMenuOpen = useAppSelector((state) => state.menu.isMenuOpen);
    const upcomingNum: number = useFilterTasks("week").length;
    const todayNum: number = useFilterTasks("today").length;

    const onMenu = (): void => {
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
                <SearchFormComponent />
                <div className="mt-5 ml-3 text-xs font-semibold uppercase">
                    Tasks
                </div>
                <div className="mt-3 flex flex-col">
                    <CustomLink
                        to="/upcoming"
                        title="Upcoming"
                        number={upcomingNum}
                        icon={upcoming}
                    />
                    <CustomLink
                        to="/today"
                        title="Today"
                        number={todayNum}
                        icon={today}
                    />
                    <CustomLink
                        to="/calendar"
                        title="Calendar"
                        icon={calendar}
                    />
                    <CustomLink to="/notes" title="Sticky Wall" icon={note} />
                </div>
                <div className="mt-3 h-px bg-neutral-300"></div>
                <ListComponent />
                <div className="mt-3 h-px bg-neutral-300"></div>
                <TagsComponent />
            </div>
        </div>
    );
};

export default MenuComponent;
