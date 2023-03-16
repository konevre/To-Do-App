import { FormikValues } from "formik";

export interface Subtask {
    done: boolean;
    name: string;
}

// TODO: Подумать как сузить
export interface Todo {
    id: string;
    name: string;
    description: string;
    list: string;
    due_date: string;
    tags: string;
    subtasks: Subtask[];
    completed: boolean;
    startHour: string;
    endHour: string;
    color: string;
}

// TODO - ограничить по цветам и сделать айди
export interface Sticker {
    name: string;
    description: string;
    color: string;
    id: string;
}

// TODO - ограничить по цветам и сделать айди
export interface List {
    name: string;
    color: string;
    id: string;
}

// TODO: ограничить цвета + сделать генерацию айди
export interface Tag {
    name: string;
    color: string;
    id: string;
}

export type Range = "day" | "week" | "month";
export type Filter = "today" | "tomorrow" | "week" | "list" | "tag" | "search";
export type SetFieldValue = (
    field: string,
    value: any,
    shouldValidate?: boolean
) => void;

export interface FieldValues {
    setFieldValue: SetFieldValue;
    values: FormikValues;
}
