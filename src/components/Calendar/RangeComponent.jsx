import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import useLuxon from "../../hooks/calendarHooks/useLuxon";

import { changeState } from "../../store/calendarSlice";
import right from "../../resources/icons/chevron.svg";
import left from "../../resources/icons/chevron-left.svg";

const RangeComponent = () => {
    const { activeState } = useSelector((state) => state.calendar);
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const selectorsWidth = isMoreThan1024 ? "w-1/3" : "";

    const { changeDate } = useLuxon();

    const dispatch = useDispatch();
    const onActiveState = (state) => {
        dispatch(changeState(state));
    };

    return (
        <div className="flex justify-between">
            <div
                className={`${selectorsWidth} flex gap-x-2 rounded-lg bg-neutral-300 p-1`}
            >
                <div
                    onClick={() => onActiveState("day")}
                    className={`${
                        activeState === "day"
                            ? "bg-neutral-400"
                            : "bg-slate-100"
                    } basis-1/3 cursor-pointer items-center justify-center rounded-md  p-1 text-center text-xs`}
                >
                    Day
                </div>
                <div
                    onClick={() => onActiveState("week")}
                    className={`${
                        activeState === "week"
                            ? "bg-neutral-400"
                            : "bg-slate-100"
                    } basis-1/3 cursor-pointer items-center justify-center rounded-md  p-1 text-center text-xs`}
                >
                    Week
                </div>
                <div
                    onClick={() => onActiveState("month")}
                    className={`${
                        activeState === "month"
                            ? "bg-neutral-400"
                            : "bg-slate-100"
                    } basis-1/3 cursor-pointer items-center justify-center rounded-md  p-1 text-center text-xs`}
                >
                    Month
                </div>
            </div>
            {isMoreThan1024 && (
                <div className="flex h-5 w-16 items-center justify-between">
                    <img
                        src={left}
                        alt=""
                        className="h-full cursor-pointer"
                        onClick={() => changeDate(activeState, -1)}
                    />

                    <img
                        src={right}
                        alt=""
                        className="h-full cursor-pointer"
                        onClick={() => changeDate(activeState, 1)}
                    />
                </div>
            )}
        </div>
    );
};

export default RangeComponent;
