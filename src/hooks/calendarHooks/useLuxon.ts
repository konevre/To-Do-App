import { DateTime } from "luxon";

import { changeNow } from "../../store/calendarSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Range, Todo } from "../../types";

export const todayDate = DateTime.now().toFormat("dd-MM-yy");

const useLuxon = () => {
    const { today } = useAppSelector((state) => state.calendar);
    const dispatch = useAppDispatch();
    const onChange = (date: string): void => {
        dispatch(changeNow(date));
    };

    const now = DateTime.fromFormat(today, "dd-MM-yy");
    const constantNow = DateTime.now();

    const to12 = (index: number): string => {
        return DateTime.fromFormat(`${index}`, "H").toFormat("hh:mm a");
    };

    const isCorrectRange = (
        range: Range,
        date: string,
        plus: number
    ): boolean => {
        const luxonDate = DateTime.fromFormat(`${date}`, "dd-MM-yy");
        return constantNow.plus({ days: plus }).hasSame(luxonDate, range);
    };

    const filterTasks = (tasks: Todo[], range: Range, plus = 0): Todo[] => {
        return tasks.filter((item) =>
            isCorrectRange(range, item.due_date, plus)
        );
    };

    const showToday = () => {
        onChange(constantNow.toFormat("dd-MM-yy"));
    };

    const changeDate = (state: Range, range: number): void => {
        switch (state) {
            case "day":
                onChange(now.plus({ days: range }).toFormat("dd-MM-yy"));
                break;
            case "week":
                onChange(now.plus({ weeks: range }).toFormat("dd-MM-yy"));
                break;
            default:
                onChange(now.plus({ months: range }).toFormat("dd-MM-yy"));
                break;
        }
    };

    return {
        now,
        constantNow,
        changeDate,
        to12,
        filterTasks,
        showToday,
    } as const;
};

export default useLuxon;
