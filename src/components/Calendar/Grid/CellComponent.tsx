import React from "react";
import { useMediaQuery } from "react-responsive";

import useCalendar from "../../../hooks/calendarHooks/useCalendar";
import { useAppSelector } from "../../../store/hooks";
import { Todo } from "../../../types";

interface ICellProps {
    col: Todo[];
}

const CellComponent: React.FC<ICellProps> = ({ col }) => {
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const { activeState } = useAppSelector((state) => state.calendar);
    const { onEvent } = useCalendar();

    const cell = col.map((event) => {
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
                key={event.id}
                onClick={() => onEvent(event)}
                style={cellStyle}
                className={`${event.color} truncate rounded-md p-2 text-xs`}
            >
                {isShowContent}
            </div>
        );
    });

    return <>{cell}</>;
};

export default CellComponent;
