import React from "react";
import { Formik, Form, Field } from "formik";

import useTagListForm from "../../hooks/formHooks/useTagListForm";

import CustomErrorMessageComponent from "./CustomErrorMessageComponent";

interface ITagListProps {
    name: "List" | "Tag";
}

const TagListFormComponent: React.FC<ITagListProps> = ({ name }) => {
    const {
        activeColor,
        initialState,
        validationSchema,
        onSubmit,
        colorItems,
    } = useTagListForm(name);
    return (
        <div className="mt-3 rounded-lg border border-neutral-300 bg-neutral-200 p-3 ">
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form id={name.toLowerCase()}>
                    <div className="flex items-center rounded-lg border border-neutral-300 p-3">
                        <div className={`h-4 w-4 rounded ${activeColor}`}></div>
                        <Field
                            name={name}
                            type="text"
                            placeholder={`${name} Name`}
                            className="ml-2 w-full resize-none bg-neutral-200 px-3.5 text-sm text-neutral-500"
                        ></Field>
                    </div>
                    <CustomErrorMessageComponent name={name} style="mt-3" />
                </Form>
            </Formik>

            <div className="mt-4 flex flex-wrap justify-between">
                {colorItems}
            </div>
        </div>
    );
};

export default TagListFormComponent;
