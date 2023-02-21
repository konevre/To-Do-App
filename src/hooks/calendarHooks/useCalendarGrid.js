import { isNewCol, countHours } from "../../utils/utils";
import useGetTodos from "../useGetTodos";

import useLuxon from "./useLuxon.js";

const useCalendarGrid = (index) => {
    const { now } = useLuxon();
    const { todos } = useGetTodos();
    const shift = +now.toFormat("E") - 1;
    const dayCalc = index ? index - shift : 0;
    const currentDay = now.plus({ day: dayCalc });

    const hours = [[]];
    const cols = [[]];

    todos.forEach((event) => {
        if (event.due_date === currentDay.toFormat("dd-MM-yy")) {
            const start = +event.startHour.slice(0, 2);
            const end = +event.endHour.slice(0, 2);

            const eventHours = countHours(start, end);
            const newCol = isNewCol(hours, eventHours);

            if (newCol === -1) {
                hours.push(eventHours);
                cols.push([event]);
            } else {
                cols[newCol].push(event);
                hours[newCol].push(...eventHours);
            }
        }
    });

    return { cols };
};

export default useCalendarGrid;
