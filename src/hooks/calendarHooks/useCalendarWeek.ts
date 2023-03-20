import { useMediaQuery } from "react-responsive";

import { useAppSelector } from "../../store/hooks";

import useLuxon from "./useLuxon";

const useCalendarWeek = () => {
    const { activeState } = useAppSelector((state) => state.calendar);
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const isNotMonth = activeState !== "month";

    const { now } = useLuxon();
    const startWeek = now.startOf("week");
    const endWeek = now.endOf("week");

    const weekArray = [];
    for (let i = 0; i < 7; i++) {
        weekArray.push(startWeek.plus({ days: i }));
    }

    const buildTitle = () => {
        const isSameMonth = startWeek.hasSame(endWeek, "month");
        const start = startWeek.toFormat("d");
        const startMonth = startWeek.toFormat("LLLL");
        const end = endWeek.toFormat("d");
        const endMonth = endWeek.toFormat("LLLL");

        return isSameMonth
            ? `${start} - ${end} ${startMonth}`
            : `${start} ${startMonth} - ${end} ${endMonth}`;
    };

    const weekTitle = buildTitle();

    const isWeek1024 = activeState === "week" && isMoreThan1024;
    const gridCols = isWeek1024 ? "grid-cols-8" : "grid-cols-7";

    return {
        weekTitle,
        gridCols,
        isWeek1024,
        isNotMonth,
        weekArray,
        now,
    } as const;
};

export default useCalendarWeek;
