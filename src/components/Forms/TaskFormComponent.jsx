import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";

import SubtaskComponent from "../Task/SubtaskComponent.jsx";

const TaskFormComponent = ({ initialValues, validationSchema, onSubmit }) => {
    const lists = useSelector((state) => state.lists.lists);
    const tags = useSelector((state) => state.tags.tags);

    const makeOptions = (array) => {
        return array.map((item) => {
            const name = item.name;
            return <option value={name}>{name}</option>;
        });
    };

    return (
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
                        <label className="text-sm" htmlFor="list">
                            List
                        </label>
                        <Field
                            as="select"
                            name="list"
                            id="list"
                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                        >
                            <option value=""></option>
                            {makeOptions(lists)}
                        </Field>
                        <label className="text-sm" htmlFor="date">
                            Due Date
                        </label>
                        <Field
                            name="date"
                            id="date"
                            type="date"
                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                        />
                        <label className="text-sm" htmlFor="tags">
                            Tags
                        </label>
                        <Field
                            as="select"
                            name="tags"
                            id="tags"
                            className="h-full rounded border border-neutral-300 bg-neutral-200 px-1 text-sm"
                        >
                            <option value=""></option>
                            {makeOptions(tags)}
                        </Field>
                    </div>
                    <SubtaskComponent values={values.values} />
                </Form>
            )}
        </Formik>
    );
};

export default TaskFormComponent;