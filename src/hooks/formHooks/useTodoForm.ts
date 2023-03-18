import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { DateTime } from "luxon";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { closeEdit, makeEditNull, showTodo } from "../../store/editSlice";
import {
    Subtask,
    Tag,
    Todo,
    List,
    GeneralColors,
    TagColor,
    ListColor,
} from "../../types";
import {
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from "../../store/api/apiEndpoints/todoEndpoints";

import useLuxon from "../calendarHooks/useLuxon";
import { FormikHelpers } from "formik";

type StringOrEmpty = string | "";

// TODO - вынести филлеры в отдельный файл
const generalColors: GeneralColors[] = [
    "bg-fuchsia-500",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-amber-600",
    "bg-violet-500",
    "bg-sky-500",
    "bg-yellow-400",
    "bg-red-500",
    "bg-purple-400",
];

interface FormikValues {
    name: StringOrEmpty;
    list: StringOrEmpty;
    tags: StringOrEmpty;
    descr: StringOrEmpty;
    date: StringOrEmpty;
    startPeriod: StringOrEmpty;
    endPeriod: StringOrEmpty;
    startHour: StringOrEmpty;
    endHour: StringOrEmpty;
    subtasks: Subtask[];
    color: TagColor | ListColor | GeneralColors | "";
    completed?: boolean;
}

const getRandomColor = (colors: GeneralColors[]) => {
    const arrLen = colors.length;
    const randomIndex = Math.floor(Math.random() * arrLen);
    return generalColors[randomIndex];
};

const handleTodoColor = (values: FormikValues, list: List[], tag: Tag[]) => {
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

const useTodoForm = () => {
    const dispatch = useAppDispatch();
    const { edit } = useAppSelector((state) => state.edit);
    const { constantNow } = useLuxon();
    const { lists } = useAppSelector((state) => state.lists);
    const { tags } = useAppSelector((state) => state.tags);

    const isOpen = edit.isOpen;
    const todoObj = edit.task;

    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const initialValues: FormikValues = {
        name: todoObj ? todoObj?.name : "",
        descr: todoObj ? todoObj?.description : "",
        list: todoObj ? todoObj?.list : "",
        date: todoObj ? todoObj?.due_date : constantNow.toFormat("dd-MM-yy"),
        tags: todoObj ? todoObj.tags : "",
        subtasks: todoObj ? todoObj.subtasks : [],
        completed: todoObj ? todoObj?.completed : false,
        startHour: todoObj
            ? DateTime.fromFormat(todoObj?.startHour, "HH:mm").toFormat("h")
            : "1",
        startPeriod: todoObj
            ? DateTime.fromFormat(todoObj?.startHour, "HH:mm").toFormat("a")
            : "AM",
        endHour: todoObj
            ? DateTime.fromFormat(todoObj?.endHour, "HH:mm").toFormat("h")
            : "2",
        endPeriod: todoObj
            ? DateTime.fromFormat(todoObj?.endHour, "HH:mm").toFormat("a")
            : "AM",
        color: todoObj ? todoObj?.color : "",
    };

    const validationSchema = Yup.object()
        .shape({
            name: Yup.string()
                .min(2, "Min 2 symbols")
                .required("Name field is required."),
            subtasks: Yup.array().of(
                Yup.object().shape({
                    name: Yup.string()
                        .min(2, "Min 2 symbols")
                        .required("Name field is required."),
                })
            ),
            date: Yup.string().required("Date field is required."),
            startHour: Yup.string(),
            startPeriod: Yup.string(),
            endHour: Yup.string(),
            endPeriod: Yup.string(),
        })
        .test("time", "end hour is more than start hour", function (value) {
            const { startHour, startPeriod, endHour, endPeriod } = value;
            const start = +DateTime.fromFormat(
                    `${startHour}${startPeriod}`,
                    "ha"
                ).toFormat("H"),
                end = +DateTime.fromFormat(
                    `${endHour}${endPeriod}`,
                    "ha"
                ).toFormat("H");

            if (start < end) return true;
            return this.createError({
                path: "startHour",
                message: "End hour must be greater than start hour.",
            });
        });

    const onClose = () => {
        dispatch(closeEdit());
    };

    const onDelete = () => {
        dispatch(makeEditNull());
        if (todoObj) deleteTodo(todoObj.id);
    };

    const onUpdate = (data: Todo) => {
        dispatch(showTodo(data));
        updateTodo(data);
    };

    const onSubmit = (
        values: FormikValues,
        { resetForm }: FormikHelpers<FormikValues>
    ) => {
        if (todoObj) {
            handleSubmit(values, "PUT");
        } else {
            handleSubmit(values, "POST");
        }
        resetForm();
    };

    const handleSubmit = (values: FormikValues, method: "PUT" | "POST") => {
        const data: Todo = {
            id: todoObj?.id || uuidv4(),
            name: values.name,
            description: values.descr,
            list: values.list,
            due_date: values.date,
            tags: values.tags,
            subtasks: values.subtasks,
            completed: false,
            startHour: DateTime.fromFormat(
                `${values.startHour}${values.startPeriod}`,
                "ha"
            ).toFormat("HH:mm"),
            endHour: DateTime.fromFormat(
                `${values.endHour}${values.endPeriod}`,
                "ha"
            ).toFormat("HH:mm"),
            color: handleTodoColor(values, lists, tags),
        };
        method === "POST" ? createTodo(data) : onUpdate(data);
    };

    return {
        initialValues,
        validationSchema,
        onDelete,
        onUpdate,
        onSubmit,
        onClose,
        isOpen,
        todoObj,
    };
};

export default useTodoForm;
