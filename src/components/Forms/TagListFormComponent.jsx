import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const TagListFormComponent = ({
    name,
    initialState,
    validationSchema,
    onSubmit,
    activeColor,
    colorItems,
}) => {
    return (
        <div className="mt-3 rounded-lg border border-neutral-300 bg-neutral-200 p-3 ">
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="flex items-center rounded-lg border border-neutral-300 p-3">
                        <div className={`h-4 w-4 rounded ${activeColor}`}></div>
                        <Field
                            name={name}
                            type="text"
                            placeholder={`${name} Name`}
                            className="ml-2  w-full bg-neutral-200 px-3.5 text-sm text-neutral-500"
                        ></Field>
                    </div>
                    <ErrorMessage
                        component="div"
                        name={name}
                        className="mt-3 rounded-lg border border-red-500 p-2 text-center text-red-500"
                    />
                </Form>
            </Formik>

            <div className="mt-4 flex justify-between">{colorItems}</div>
        </div>
    );
};

export default TagListFormComponent;
