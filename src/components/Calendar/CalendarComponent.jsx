import React from "react";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import useCalendar from "../../hooks/calendarHooks/useCalendar.jsx";

import WeekdayComponent from "./WeekdayComponent.jsx";
import RangeComponent from "./RangeComponent.jsx";

const CalendarComponent = () => {
    const { activeTitle, activeFilter } = useCalendar();

    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title={activeTitle} number={false} />
            <RangeComponent />
            <WeekdayComponent />
            <div className="mt-5 basis-full overflow-y-auto">
                {activeFilter}
            </div>
        </div>
    );
};

export default CalendarComponent;
