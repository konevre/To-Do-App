import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import useTodoForm from "../../hooks/formHooks/useTodoForm";
import { useAppSelector } from "../../store/hooks";
import { Tag, List } from "../../types";

import SubtaskComponent from "../Task/SubtaskComponent";

import DateTimePickerComponent from "./Timepicker/DateTimePickerComponent";
import CustomErrorMessageComponent from "./CustomErrorMessageComponent";

const TaskFormComponent: React.FC = () => {
    const lists = useAppSelector((state) => state.lists.lists);
    const tags = useAppSelector((state) => state.tags.tags);

    const { initialValues, validationSchema, onSubmit } = useTodoForm();

    const makeOptions = (array: Tag[] | List[]) => {
        return array.map((item) => {
            const name = item.name;
            return (
                <option key={item.id} value={name}>
                    {name}
                </option>
            );
        });
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="mt-5" action="#" id="task">
                    <Field
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="flex h-10 w-full items-center rounded-lg border border-neutral-300 bg-neutral-200 px-3.5 text-sm text-neutral-500"
                    />
                    <CustomErrorMessageComponent name="name" />
                    <Field
                        className="mt-3 w-full resize-none rounded-lg border border-neutral-300 bg-neutral-200 p-3.5 text-sm text-neutral-500"
                        name="descr"
                        id="descr"
                        as="textarea"
                        placeholder="Description"
                        rows="5"
                    ></Field>
                    <div className="mt-5 grid grid-cols-form grid-rows-form items-center gap-y-3">
                        <DateTimePickerComponent
                            values={values}
                            setFieldValue={setFieldValue}
                        />
                        <CustomErrorMessageComponent
                            name="date"
                            style="col-span-2 mb-3"
                        />
                        <CustomErrorMessageComponent
                            name="startHour"
                            style="col-span-2 mb-3"
                        />
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
                    <SubtaskComponent values={values} />
                </Form>
            )}
        </Formik>
    );
};

export default TaskFormComponent;
