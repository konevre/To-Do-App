import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import useLuxon from "../../hooks/calendarHooks/useLuxon";

import { changeState } from "../../store/calendarSlice";
import right from "../../resources/icons/chevron.svg";
import left from "../../resources/icons/chevron-left.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import RangeSelectorComponent from "./RangeSelectorComponent";

const RangeComponent = () => {
    const { activeState } = useAppSelector((state) => state.calendar);
    const { changeDate, showToday } = useLuxon();
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const selectorsWidth = isMoreThan1024 ? "w-1/3" : "";

    return (
        <div className="flex justify-between">
            <div
                className={`${selectorsWidth} flex gap-x-2 rounded-lg bg-neutral-300 p-1`}
            >
                <RangeSelectorComponent selector="day" />
                <RangeSelectorComponent selector="week" />
                <RangeSelectorComponent selector="month" />
            </div>
            {isMoreThan1024 && (
                <div className="flex h-5 items-center justify-between gap-x-3">
                    <img
                        src={left}
                        alt="chevronLeft"
                        className="h-full cursor-pointer"
                        onClick={() => changeDate(activeState, -1)}
                    />

                    <div className="flex cursor-pointer items-center justify-center rounded-md p-1 text-center font-semibold">
                        <div className="p-1" onClick={showToday}>
                            Today
                        </div>
                    </div>

                    <img
                        src={right}
                        alt="chevronRight"
                        className="h-full cursor-pointer"
                        onClick={() => changeDate(activeState, 1)}
                    />
                </div>
            )}
        </div>
    );
};

export default RangeComponent;
