/* eslint-disable indent */
import React from "react";

import xmark from "../../resources/icons/xmark.svg";
import TaskFormComponent from "../Forms/TaskFormComponent.jsx";

import useTodoForm from "../../hooks/useTodoForm";

const TaskEditComponent = () => {
    const {
        initialValues,
        validationSchema,
        onDelete,
        onSubmit,
        onClose,
        isOpen,
    } = useTodoForm();

    const isHidden = isOpen
        ? "absolute top-0 z-10 translate-x-0 sm:static sm:z-0"
        : "absolute top-0 -z-10 translate-x-full delay-300 sm:static sm:z-0 sm:hidden";

    const transition =
        "transform transition duration-300 ease-in-out sm:transform-none";

    const render = () => {
        return (
            <div
                className={`${isHidden} ${transition} h-full w-full overflow-y-auto bg-neutral-200 sm:basis-1/3 sm:rounded-2xl sm:bg-slate-100`}
            >
                <div className="flex h-full flex-col justify-between bg-neutral-200 p-4 sm:rounded-2xl">
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
                        <TaskFormComponent
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        />
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
