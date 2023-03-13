import React from "react";

import useCalendar from "../../hooks/calendarHooks/useCalendar.jsx";

import useCalendarMonth from "../../hooks/calendarHooks/useCalendarMonth.js";
import useGetTodos from "../../hooks/useGetTodos.js";

const MonthComponent = () => {
    const { monthArray, now, isLessThan640 } = useCalendarMonth();
    const { onEvent } = useCalendar();
    const { todos } = useGetTodos();

    const monthItems = monthArray.map((item) => {
        const day = item === "" ? "" : item.toFormat("dd-MM-yy");
        const dayEvents = todos.filter((event) => event.due_date === day);

        const bgColor =
            now.hasSame(item, "day") && isLessThan640
                ? "bg-neutral-200 font-semibold h-8 w-8 m-auto"
                : "";
        return (
            <div
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
