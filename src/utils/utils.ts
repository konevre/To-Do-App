import { IFormikValues, List, Tag, GeneralColors } from "../types";
import { generalColors } from "./colors";

export const toCapitalCase = (string: string) => {
    if (string) return string[0].toUpperCase() + string.slice(1);
    return string;
};

export const countHours = (start: number, end: number) => {
    const range = [];
    for (let i = start; end > i; i++) {
        range.push(i);
    }
    return range;
};

export const isNewCol = (hours: number[][], eventHours: number[]) => {
    let index = -1;
    for (let i = 0; i < hours.length; i++) {
        if (!hours[i].some((hour) => eventHours.includes(hour))) {
            index = i;
            break;
        }
    }
    return index;
};

export const getRandomColor = (colors: GeneralColors[]) => {
    const arrLen = colors.length;
    const randomIndex = Math.floor(Math.random() * arrLen);
    return generalColors[randomIndex];
};
export const handleTodoColor = (
    values: IFormikValues,
    list: List[],
    tag: Tag[]
) => {
    const listColor = list.filter((item) => item.name === values.list)[0]
            ?.color,
        tagColor = tag.filter((item) => item.name === values.tags)[0]?.color;

    if (values.color === "") {
        if (values.list !== "") {
            return listColor;
        }
        if (values.tags !== "") {
            return tagColor;
        }
        return getRandomColor(generalColors);
    } else {
        if (values.list === "") {
            if (values.tags === "") {
                return getRandomColor(generalColors);
            } else {
                return tagColor;
            }
        } else {
            return listColor;
        }
    }
};
