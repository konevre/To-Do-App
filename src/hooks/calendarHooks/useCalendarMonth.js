import { useMediaQuery } from "react-responsive";

import useLuxon from "./useLuxon.js";

const useCalendarMonth = (today = null) => {
    const isLessThan640 = useMediaQuery({ query: "(max-width: 640px)" });
    const { now } = useLuxon();
    const date = today || now;

    const monthTitle = date.toFormat("LLLL y");

    const monthArray = [];
    const monthStart = date.startOf("month");
    const monthEnd = date.endOf("month").toFormat("d");

    const dayOfWeek = +monthStart.toFormat("c");
    const totalCells = +monthEnd + dayOfWeek;

    let counter = 0;
    for (let i = 1; i < totalCells; i++) {
        if (i < dayOfWeek || i > totalCells) {
            monthArray.push("");
        } else {
            monthArray.push(monthStart.plus({ days: counter }));
            counter++;
        }
    }

    return { monthTitle, monthArray, now, isLessThan640 };
};

export default useCalendarMonth;
