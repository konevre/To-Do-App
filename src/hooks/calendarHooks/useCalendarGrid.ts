import { DateTime } from "luxon";
import { isNewCol, countHours } from "../../utils/utils";
import { Todo } from "../../types";

import useLuxon from "./useLuxon";
import { useAppSelector } from "../../store/hooks";

const useCalendarGrid = (index: number) => {
    const { now } = useLuxon();
    const { todos } = useAppSelector((state) => state.tasks);
    const shift = +now.toFormat("E") - 1;
    const dayCalc = index - shift;
    const currentDay: DateTime = now.plus({ day: dayCalc });

    const hours: number[][] = [[]];
    const cols: Todo[][] = [[]];
    let num = 0;

    todos.forEach((event) => {
        if (event.due_date === currentDay.toFormat("dd-MM-yy")) {
            const start = +event.startHour.slice(0, 2);
            const end = +event.endHour.slice(0, 2);

            const eventHours: number[] = countHours(start, end);
            const newCol = isNewCol(hours, eventHours);

            if (newCol === -1) {
                hours.push(eventHours);
                cols.push([event]);
            } else {
                cols[newCol].push(event);
                hours[newCol].push(...eventHours);
            }
            num++;
        }
    });

    return { cols } as const;
};

export default useCalendarGrid;
