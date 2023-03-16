import React from "react";

import HeaderComponent from "../Header/HeaderComponent";
import useCalendar from "../../hooks/calendarHooks/useCalendar";

import WeekdayComponent from "./WeekdayComponent";
import RangeComponent from "./RangeComponent";

const CalendarComponent: React.FC = () => {
    const { activeTitle, activeFilter } = useCalendar();

    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title={activeTitle} number={0} />
            <RangeComponent />
            <WeekdayComponent />
            <div className="mt-5 basis-full overflow-y-auto">
                {activeFilter}
            </div>
        </div>
    );
};

export default CalendarComponent;
