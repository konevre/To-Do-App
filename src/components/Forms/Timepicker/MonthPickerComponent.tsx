import React, { useState } from "react";
import { DateTime } from "luxon";

import useCalendarMonth from "../../../hooks/calendarHooks/useCalendarMonth";
import useLuxon from "../../../hooks/calendarHooks/useLuxon";
import chevronRight from "../../../resources/icons/chevron.svg";
import chevronLeft from "../../../resources/icons/chevron-left.svg";
import useCalendarWeek from "../../../hooks/calendarHooks/useCalendarWeek";
import useLayout from "../../../hooks/useLayout";
import { isString } from "../../../types";
import { FieldValues } from "../../../types";

const MonthPickerComponent: React.FC<FieldValues> = ({
    setFieldValue,
    values,
}) => {
    const { now } = useLuxon();
    const [month, setMonth] = useState<DateTime>(now);
    const { isEditOpen, isLessThan840 } = useLayout();

    const onSetDate = (item: DateTime) => {
        setFieldValue("date", item.toFormat("dd-MM-yy"));
    };

    const { monthArray } = useCalendarMonth(month);
    const changeMonth = (dir: number) => {
        setMonth((prevState) => prevState.plus({ months: dir }));
    };

    const { weekArray, gridCols } = useCalendarWeek();
    const weekDays = weekArray.map((item, i) => {
        const weekDay = item.toFormat("ccc").toUpperCase();
        return (
            <div key={i} className="flex flex-col gap-2 rounded-md p-1">
                <div className="basis-1/2 text-center text-xs">{weekDay}</div>
            </div>
        );
    });
    const monthItems = monthArray.map((item: string | DateTime, i) => {
        const day = isString(item) ? "" : item.toFormat("dd-MM-yy");
        const bg =
            values.date === day && day !== "" ? "bg-neutral-400 rounded" : "";
        const padding = isEditOpen && isLessThan840 ? "p-1" : "p-2";
        return (
            <div
                key={i}
                className={`${padding} flex flex-col items-center justify-center rounded-md text-sm sm:items-start sm:justify-start`}
            >
                <div
                    onClick={() => {
                        if (!isString(item)) onSetDate(item);
                    }}
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
            {<div className={`mt-3 grid grid-cols-7`}>{weekDays}</div>}
            <div className="grid auto-rows-fr grid-cols-7 grid-rows-4">
                {monthItems}
            </div>
        </>
    );
};

export default MonthPickerComponent;
