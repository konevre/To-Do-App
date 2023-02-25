import React, { useState } from "react";

import useCalendarMonth from "../../../hooks/calendarHooks/useCalendarMonth.js";
import useLuxon from "../../../hooks/calendarHooks/useLuxon.js";
import chevronRight from "../../../resources/icons/chevron.svg";
import chevronLeft from "../../../resources/icons/chevron-left.svg";
import useCalendarWeek from "../../../hooks/calendarHooks/useCalendarWeek.js";
import useLayout from "../../../hooks/useLayout.js";

const MonthPickerComponent = ({ setFieldValue, values }) => {
    const { now } = useLuxon();
    const [month, setMonth] = useState(now);
    const { isEditOpen, isLessThan840 } = useLayout();

    const onSetDate = (item) => {
        setFieldValue("date", item.toFormat("dd-MM-yy"));
    };

    const { monthArray } = useCalendarMonth(month);
    const changeMonth = (dir) => {
        setMonth(month.plus({ months: dir }));
    };

    const { weekArray, gridCols } = useCalendarWeek();
    const weekDays = weekArray.map((item) => {
        const weekDay = item.toFormat("ccc").toUpperCase();
        return (
            <div className="flex flex-col gap-2 rounded-md p-1">
                <div className="basis-1/2 text-center text-xs">{weekDay}</div>
            </div>
        );
    });
    const monthItems = monthArray.map((item) => {
        const day = item === "" ? "" : item.toFormat("dd-MM-yy");
        const bg =
            values.date === day && day !== "" ? "bg-neutral-400 rounded" : "";
        const p = isEditOpen.isOpen && isLessThan840 ? "p-1" : "p-2";
        return (
            <div
                className={`${p} flex flex-col items-center justify-center rounded-md text-sm sm:items-start sm:justify-start`}
            >
                <div
                    onClick={() => onSetDate(item)}
                    className={`${bg} flex w-full basis-1/4 cursor-default justify-center`}
                >
                    {day.slice(0, 2)}
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="mt-5 flex flex-row justify-between">
                <img
                    src={chevronLeft}
                    alt="previous month"
                    className="h-4 cursor-pointer"
                    onClick={() => changeMonth(-1)}
                />
                <div className="my-auto text-sm font-semibold">
                    {month.toFormat("LLLL, yyyy")}
                </div>
                <img
                    src={chevronRight}
                    alt="next month"
                    className="h-4 cursor-pointer"
                    onClick={() => changeMonth(1)}
                />
            </div>
            {!isLessThan840 && (
                <div className={`${gridCols} mt-3 grid`}>{weekDays}</div>
            )}
            <div className="grid auto-rows-fr grid-cols-7 grid-rows-4">
                {monthItems}
            </div>
        </>
    );
};

export default MonthPickerComponent;
