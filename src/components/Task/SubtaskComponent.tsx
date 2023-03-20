/* eslint-disable indent */
import React from "react";
import { Field, FieldArray, FormikValues } from "formik";

import plus from "../../resources/icons/plus.svg";
import xmark from "../../resources/icons/xmark.svg";
import { ISubtask } from "../../types";
import CustomErrorMessageComponent from "../Forms/CustomErrorMessageComponent";

const SubtaskComponent: React.FC<FormikValues> = ({ values }) => {
    return (
        <>
            <FieldArray
                name="subtasks"
                render={(arrayHelpers) => (
                    <>
                        <div className="sm:text-x mt-5 font-semibold">
                            Subtask:
                        </div>
                        <div
                            onClick={() => {
                                arrayHelpers.push({ done: false, name: "" });
                            }}
                            className="mt-5 flex h-12 cursor-pointer flex-row rounded-lg border border-neutral-300 p-3.5"
                        >
                            <img src={plus} alt="plus" className="h-full" />
                            <div className="ml-3 flex items-center truncate text-base text-neutral-500">
                                Add New Subtask
                            </div>
                        </div>
                        <div className="mt-3">
                            {values.subtasks.map(
                                (subtask: ISubtask, i: number) => {
                                    return (
                                        <div key={i}>
                                            <div className="flex h-10 flex-row p-1">
                                                <Field
                                                    name={`subtasks.${i}.done`}
                                                    type="checkbox"
                                                    className="w-4"
                                                />
                                                <Field
                                                    name={`subtasks.${i}.name`}
                                                    placeholder="Name"
                                                    className="ml-3 basis-full border-none bg-neutral-200 px-3.5 text-sm text-neutral-500"
                                                    type="text"
                                                />

                                                <div className="ml-2 flex items-center justify-center">
                                                    <img
                                                        src={xmark}
                                                        alt="xmark"
                                                        className="h-2/3 cursor-pointer"
                                                        onClick={() =>
                                                            arrayHelpers.remove(
                                                                i
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <CustomErrorMessageComponent
                                                name={`subtasks.${i}.name`}
                                                style="mb-2"
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </>
                )}
            />
        </>
    );
};

export default SubtaskComponent;
