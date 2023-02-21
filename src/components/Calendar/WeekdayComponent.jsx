import React from "react";

import useCalendarWeek from "../../hooks/calendarHooks/useCalendarWeek.js";

const WeekdayComponent = () => {
    const { gridCols, isWeek1024, isNotMonth, weekArray, now } =
        useCalendarWeek();

    return (
        <div className={`${gridCols} mt-3 grid`}>
            {isWeek1024 && <div></div>}
            {weekArray.map((item) => {
                const weekDay = item.toFormat("ccc").toUpperCase();
                const day = item.toFormat("d");
                const bgColor =
                    now.hasSame(item, "day") && isNotMonth
                        ? "bg-neutral-200"
                        : "";
                return (
                    <div
                        className={`${bgColor} flex flex-col gap-2 rounded-md p-1`}
                    >
                        <div className="basis-1/2 text-center text-xs">
                            {weekDay}
                        </div>
                        {isNotMonth && (
                            <div className="basis-1/2 text-center text-xs">
                                {day}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default WeekdayComponent;
