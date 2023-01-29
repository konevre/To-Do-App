import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { formatDate } from "../utils/utils";

import { closeEdit, makeEditNull, showEdit } from "../store/editSlice";
import {
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from "../store/apiSlice.js";

const useTodoForm = () => {
    const { isEditOpen } = useSelector((state) => state.edit);
    const isOpen = isEditOpen.isOpen;
    const todoObj = isEditOpen.task;

    const dispatch = useDispatch();

    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const initialValues = {
        name: todoObj ? todoObj?.name : "",
        descr: todoObj ? todoObj?.description : "",
        list: todoObj ? todoObj?.list : "",
        date: todoObj ? formatDate(todoObj?.due_date, "yyyy-MM-dd") : "",
        tags: todoObj ? todoObj.tags : "",
        subtasks: todoObj ? todoObj.subtasks : [],
    };

    const validationSchema = Yup.object({
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
    });

    const onClose = () => {
        dispatch(closeEdit());
    };

    const onDelete = () => {
        dispatch(makeEditNull());
        deleteTodo(todoObj.id);
    };

    const onUpdate = (data) => {
        dispatch(showEdit(data));
        updateTodo(data);
    };

    const onSubmit = (values, { resetForm }) => {
        if (todoObj) {
            handleSubmit(values, "PUT");
        } else {
            handleSubmit(values, "POST");
        }
        resetForm();
    };

    const handleSubmit = (values, method) => {
        const date =
            values.date.length === 0 ? "" : formatDate(values.date, "dd-MM-yy");
        const data = {
            id: todoObj?.id || uuidv4(),
            name: values.name,
            description: values.descr,
            list: values.list,
            due_date: date,
            tags: values.tags,
            subtasks: values.subtasks,
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
