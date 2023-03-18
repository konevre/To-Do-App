import { FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { DateTime } from "luxon";

import { handleTodoColor } from "../../utils/utils";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { closeEdit, makeEditNull, showTodo } from "../../store/editSlice";
import { IFormikValues, Todo } from "../../types";
import {
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from "../../store/api/apiEndpoints/todoEndpoints";

import useLuxon from "../calendarHooks/useLuxon";

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

    const initialValues: IFormikValues = {
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
        values: IFormikValues,
        { resetForm }: FormikHelpers<IFormikValues>
    ) => {
        if (todoObj) {
            handleSubmit(values, "PUT");
        } else {
            handleSubmit(values, "POST");
        }
        resetForm();
    };

    const handleSubmit = (values: IFormikValues, method: "PUT" | "POST") => {
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
