import React from "react";
import { Formik, Form, Field } from "formik";

import useStickerForm from "../../hooks/formHooks/useStickerForm";

import CustomErrorMessageComponent from "./CustomErrorMessageComponent";

const StickerForm = () => {
    const {
        initialState,
        validationSchema,
        onSubmit,
        selectedColor,
        colorItems,
    } = useStickerForm();

    return (
        <div className="mt-3 rounded-lg border border-neutral-300 bg-neutral-200 p-3 ">
            <Formik
                enableReinitialize
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form id="sticker">
                    <div className="flex items-center rounded-lg border border-neutral-300 p-3">
                        <div
                            className={`h-4 w-4 rounded ${selectedColor}`}
                        ></div>
                        <Field
                            name="Sticker"
                            type="text"
                            placeholder="Sticker Name"
                            className="ml-2 w-full resize-none bg-neutral-200 px-1 text-sm text-neutral-500"
                        ></Field>
                    </div>

                    <div className="mt-2 flex items-center rounded-lg border border-neutral-300 p-3">
                        <Field
                            name="descr"
                            as="textarea"
                            rows="10"
                            placeholder="Description"
                            className="ml-2 w-full resize-none bg-neutral-200 px-1 text-sm text-neutral-500"
                        ></Field>
                    </div>
                    <CustomErrorMessageComponent name="descr" />
                    <CustomErrorMessageComponent name="Sticker" />
                </Form>
            </Formik>

            <div className="mt-4 flex flex-wrap justify-between">
                {colorItems}
            </div>
        </div>
    );
};

export default StickerForm;
