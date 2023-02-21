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

    const to12 = (time) => {
        if (time !== "") {
            return DateTime.fromFormat(time, "HH:mm").toFormat("h");
        }
    };

    const now = DateTime.fromFormat(today, "dd-MM-yy");

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
    return { now, changeDate, to12 };
};

export default useLuxon;
