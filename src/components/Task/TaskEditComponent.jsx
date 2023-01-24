/* eslint-disable indent */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import {
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from "../../store/apiSlice";

import { closeTodo, makeTodoNull, showTodo } from "../../store/todoSlice.js";
import { formatDate } from "../../utils/utils.js";

import xmark from "../../resources/icons/xmark.svg";

import SubtaskComponent from "./SubtaskComponent.jsx";

const TaskEditComponent = () => {
    const { isTodoOpen } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const isHidden = isTodoOpen[0] ? "" : "hidden";

    // СДЕЛАТЬ КАСТОМ ХУК ПО ФОРМЕ
    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const todo = isTodoOpen[1];

    const onClose = () => {
        dispatch(closeTodo());
    };

    const onDelete = () => {
        dispatch(makeTodoNull());
        deleteTodo(todo.id);
    };

    const onUpdate = (data) => {
        dispatch(showTodo(data));
        updateTodo(data);
    };

    const onSubmit = (values, method) => {
        const date =
            values.date.length === 0 ? "" : formatDate(values.date, "dd-MM-yy");
        const data = {
            id: todo?.id || uuidv4(),
            name: values.name,
            description: values.descr,
            list: { name: values.list, color: "bg-amber-300" },
            due_date: date,
            tags: values.tags,
            subtasks: values.subtasks,
        };
        method === "POST" ? createTodo(data) : onUpdate(data);
    };
    // ДО СЮДА

    const render = () => {
        return (
            <div
                className={`${isHidden} min-h-full overflow-y-auto bg-neutral-200 sm:basis-1/3 sm:rounded-2xl sm:bg-slate-100`}
            >
                <div className="flex min-h-full flex-col justify-between bg-neutral-200 p-4 sm:rounded-2xl">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div className="font-semibold sm:text-xl">
                                Task:
                            </div>
                            <img
                                src={xmark}
                                alt="close"
                                className="h-5 cursor-pointer"
                                onClick={onClose}
                            />
                        </div>
                        {/* FORM */}
                        <Formik
                            enableReinitialize
                            initialValues={{
                                name: todo ? todo?.name : "",
                                descr: todo ? todo?.descr : "",
                                list: todo ? todo?.list.name : "",
                                date: todo
                                    ? formatDate(todo?.due_date, "yyyy-MM-dd")
                                    : "",
                                tags: todo ? todo.tags : "",
                                subtasks: todo ? todo.subtasks : [],
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .min(2, "Min 2 symbols")
                                    .required("Name field is required."),
                                subtasks: Yup.array().of(
                                    Yup.object().shape({
                                        name: Yup.string()
                                            .min(2, "Min 2 symbols")
                                            .required(
                                                "Name field is required."
                                            ),
                                    })
                                ),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                if (todo) {
                                    onSubmit(values, "PUT");
                                } else {
                                    onSubmit(values, "POST");
                                }
                                resetForm();
                            }}
                        >
                            {(values) => (
                                <Form className="mt-5" action="#" id="task">
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        className="flex h-10 w-full items-center rounded-lg border border-neutral-300 bg-neutral-200 px-3.5 text-sm text-neutral-500"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="mt-2 rounded-lg border border-red-500 p-2 text-center text-red-500"
                                    />
                                    <Field
                                        className="mt-3 w-full resize-none rounded-lg border border-neutral-300 bg-neutral-200 p-3.5 text-sm text-neutral-500"
                                        name="descr"
                                        id="descr"
                                        as="textarea"
                                        placeholder="Description"
                                        rows="5"
                                    ></Field>
                                    {/* GRID */}
                                    <div className="mt-5 grid grid-cols-form grid-rows-form items-center gap-y-3">
                                        <label
                                            className="text-sm"
                                            htmlFor="list"
                                        >
                                            List
                                        </label>
                                        <Field
                                            as="select"
                                            name="list"
                                            id="list"
                                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                                        >
                                            <option value=""></option>
                                            <option value="Personal">
                                                Personal
                                            </option>
                                            <option value="Work">Work</option>
                                            <option value="Hobby">Hobby</option>
                                        </Field>
                                        <label
                                            className="text-sm"
                                            htmlFor="date"
                                        >
                                            Due Date
                                        </label>
                                        <Field
                                            name="date"
                                            id="date"
                                            type="date"
                                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                                        />
                                        <label
                                            className="text-sm"
                                            htmlFor="tags"
                                        >
                                            Tags
                                        </label>
                                        <Field
                                            as="select"
                                            name="tags"
                                            id="tags"
                                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                                        >
                                            <option value=""></option>
                                            <option value="Tag 1">Tag 1</option>
                                            <option value="Tag 2">Tag 2</option>
                                        </Field>
                                    </div>
                                    <SubtaskComponent values={values.values} />
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="flex justify-between gap-x-4">
                        {isTodoOpen[1] && (
                            <button
                                onClick={onDelete}
                                className="flex h-10 basis-1/2 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200  text-sm font-semibold"
                            >
                                Delete task
                            </button>
                        )}
                        <button
                            type="submit"
                            form="task"
                            className={`flex h-10 ${
                                isTodoOpen[1] ? "basis-1/2" : "basis-full"
                            } items-center justify-center rounded-lg bg-amber-300 text-sm font-semibold`}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return render();
};

export default TaskEditComponent;
