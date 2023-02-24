import { useDispatch, useSelector } from "react-redux";

import { changeNow } from "../../store/calendarSlice.js";

const { DateTime } = require("luxon");

export const today = DateTime.now().toFormat("dd-MM-yy");

const useLuxon = () => {
    const { today } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();
    const onChange = (date) => {
        dispatch(changeNow(date));
    };

    const now = DateTime.fromFormat(today, "dd-MM-yy");
    const constantNow = DateTime.now();

    const to12 = (index) => {
        return DateTime.fromFormat(`${index}`, "H").toFormat("hh:mm a");
    };

    const isCorrectRange = (range, date, plus) => {
        const luxonDate = DateTime.fromFormat(`${date}`, "dd-MM-yy");
        return constantNow.plus({ days: plus }).hasSame(luxonDate, range);
    };

    const filterTasks = (tasks, range, plus = 0) => {
        return tasks.filter((item) =>
            isCorrectRange(range, item.due_date, plus)
        );
    };

    const changeDate = (state, range) => {
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
    return { now, constantNow, changeDate, to12, filterTasks };
};

export default useLuxon;
