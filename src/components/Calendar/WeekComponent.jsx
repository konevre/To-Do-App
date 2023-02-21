import React from "react";
import { useMediaQuery } from "react-responsive";

import useCalendarWeek from "../../hooks/calendarHooks/useCalendarWeek.js";

import HoursComponent from "./HoursComponent.jsx";
import ColComponent from "./Grid/ColComponent.jsx";

const WeekComponent = () => {
    const { gridCols } = useCalendarWeek();
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const cols = [...new Array(7)].map((_, i) => {
        return <ColComponent index={i} />;
    });

    return (
        <div className={`${gridCols} grid h-full`}>
            {isMoreThan1024 && (
                <div className="grid grid-rows-week">
                    <HoursComponent />
                </div>
            )}

            {cols}
        </div>
    );
};

export default WeekComponent;
