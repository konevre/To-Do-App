import React from "react";

import useCalendarGrid from "../../../hooks/calendarHooks/useCalendarGrid.js";

import CellComponent from "./CellComponent.jsx";

const ColComponent = ({ index }) => {
    const { cols, mainColStyle } = useCalendarGrid(index);

    const content = cols.map((col, i) => {
        const colStyle = {
            gridColumnStart: `${i + 1}`,
            gridColumnEnd: `${i + 2}`,
        };
        return (
            <div
                className="grid w-full grid-rows-week gap-y-1 truncate"
                style={colStyle}
            >
                <CellComponent col={col} />
            </div>
        );
    });

    return (
        <div className="grid h-full w-full border border-slate-100 border-r-neutral-200 px-1 last:border-slate-100">
            {content}
        </div>
    );
};

export default ColComponent;