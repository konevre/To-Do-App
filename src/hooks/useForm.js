import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { formatDate } from "../utils/utils";

import { closeTodo, makeTodoNull, showTodo } from "../store/todoSlice";
import {
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from "../store/apiSlice.js";

const useForm = () => {
    const { isTodoOpen } = useSelector((state) => state.tasks);
    const isOpen = isTodoOpen[0];
    const todoObj = isTodoOpen[1];

    const dispatch = useDispatch();

    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const initialValues = {
        name: todoObj ? todoObj?.name : "",
        descr: todoObj ? todoObj?.descr : "",
        list: todoObj ? todoObj?.list.name : "",
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
        dispatch(closeTodo());
    };

    const onDelete = () => {
        dispatch(makeTodoNull());
        deleteTodo(todoObj.id);
    };

    const onUpdate = (data) => {
        dispatch(showTodo(data));
        updateTodo(data);
    };

    const onSubmit = (values, method) => {
        const date =
            values.date.length === 0 ? "" : formatDate(values.date, "dd-MM-yy");
        const data = {
            id: todoObj?.id || uuidv4(),
            name: values.name,
            description: values.descr,
            list: { name: values.list, color: "bg-amber-300" },
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

export default useForm;
