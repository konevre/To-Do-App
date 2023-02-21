import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import useCalendar from "../../../hooks/calendarHooks/useCalendar.jsx";

const CellComponent = ({ col }) => {
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const { activeState } = useSelector((state) => state.calendar);
    const { onEvent } = useCalendar();

    return col.map((event) => {
        const gridRowStart = +event.startHour.slice(0, 2) + 1;
        const gridRowEnd = +event.endHour.slice(0, 2) + 1;
        const cellStyle = { gridRowStart, gridRowEnd };
        const isShowContent =
            activeState === "week"
                ? isMoreThan1024
                    ? event.name
                    : null
                : event.name;

        return (
            <div
                onClick={() => onEvent(event)}
                style={cellStyle}
                className={`${event.color} truncate rounded-md p-2 text-xs`}
            >
                {isShowContent}
            </div>
        );
    });
};

export default CellComponent;
