import { FormikValues } from "formik";

export interface Subtask {
    done: boolean;
    name: string;
}

export type GeneralColors =
    | "bg-fuchsia-500"
    | "bg-yellow-400"
    | "bg-indigo-400"
    | "bg-amber-600"
    | "bg-violet-500"
    | "bg-sky-500"
    | "bg-yellow-400"
    | "bg-red-500"
    | "bg-purple-400";

export type ListColor =
    | "bg-red-400"
    | "bg-fuchsia-400"
    | "bg-violet-400"
    | "bg-blue-500"
    | "bg-sky-400"
    | "bg-green-400"
    | "bg-yellow-400"
    | "bg-amber-500";

export type TagColor =
    | "bg-red-300"
    | "bg-pink-300"
    | "bg-purple-300"
    | "bg-indigo-300"
    | "bg-blue-300"
    | "bg-emerald-300"
    | "bg-yellow-300"
    | "bg-orange-300";

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
    color: TagColor | ListColor | GeneralColors;
}

export interface Sticker {
    name: string;
    description: string;
    color: TagColor;
    id: string;
}

export interface List {
    name: string;
    color: ListColor;
    id: string;
}

export interface Tag {
    name: string;
    color: TagColor;
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
