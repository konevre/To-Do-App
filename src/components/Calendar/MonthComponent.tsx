import React from "react";

import useCalendar from "../../hooks/calendarHooks/useCalendar";

import useCalendarMonth from "../../hooks/calendarHooks/useCalendarMonth";
import { useAppSelector } from "../../store/hooks";
import { isString } from "../../types";

const MonthComponent: React.FC = () => {
    const { monthArray, now, isLessThan640 } = useCalendarMonth();
    const { onEvent } = useCalendar();
    const { todos } = useAppSelector((state) => state.tasks);

    const monthItems = monthArray.map((item, i) => {
        const day = isString(item) ? "" : item.toFormat("dd-MM-yy");
        const dayEvents = todos.filter((event) => event.due_date === day);

        const bgColor =
            !isString(item) && now.hasSame(item, "day") && isLessThan640
                ? "bg-neutral-200 font-semibold h-8 w-8 m-auto"
                : "";
        return (
            <div
                key={i}
                className={`${bgColor} flex flex-col items-center justify-center rounded-md p-2 text-sm sm:items-start sm:justify-start`}
            >
                <div className="flex w-full basis-1/4 justify-center">
                    {day.slice(0, 2)}
                </div>
                {dayEvents.length > 0 && !isLessThan640 && (
                    <div className="w-full basis-3/4 overflow-y-auto">
                        {dayEvents.map((event) => {
                            return (
                                <div
                                    key={event.id}
                                    onClick={() => onEvent(event)}
                                    className={`${event.color} mt-1 w-full rounded-md p-3`}
                                ></div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className=" grid h-full auto-rows-fr grid-cols-7 grid-rows-4">
            {monthItems}
        </div>
    );
};

export default MonthComponent;
