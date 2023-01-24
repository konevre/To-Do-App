/* eslint-disable indent */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import xmark from "../../resources/icons/xmark.svg";

import useTodoForm from "../../hooks/useTodoForm";

import SubtaskComponent from "./SubtaskComponent.jsx";

const TaskEditComponent = () => {
    const {
        initialValues,
        validationSchema,
        onDelete,
        onSubmit,
        onClose,
        isOpen,
    } = useTodoForm();

    const isHidden = isOpen ? "" : "hidden";

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
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
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
                        {isOpen && (
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
                                isOpen ? "basis-1/2" : "basis-full"
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
