import React from "react";
import { useMediaQuery } from "react-responsive";

import useCalendarWeek from "../../hooks/calendarHooks/useCalendarWeek";

import HoursComponent from "./HoursComponent";
import ColComponent from "./Grid/ColComponent";

const WeekComponent: React.FC = () => {
    const { gridCols } = useCalendarWeek();
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const cols = [...new Array(7)].map((_, i) => {
        return <ColComponent index={i} key={i} />;
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
