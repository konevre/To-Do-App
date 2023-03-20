/* eslint-disable indent */
import React from "react";

import xmark from "../../resources/icons/xmark.svg";
import useEdit from "../../hooks/useEdit";

import StickerFormComponent from "../Forms/StickerFormComponent";
import TaskFormComponent from "../Forms/TaskFormComponent";
import SaveButtonComponent from "../Buttons/SaveButtonComponent";

const EditComponent = () => {
    const {
        isHidden,
        transition,
        onClose,
        stickerPage,
        onDelete,
        title,
        deleteBtn,
        form,
        isEditOpen,
    } = useEdit();

    const render = () => {
        return (
            <div
                className={`${isHidden} ${transition} h-full w-full overflow-y-auto bg-neutral-200 sm:basis-1/2 sm:rounded-2xl sm:bg-slate-100 lg:basis-1/3`}
            >
                <div className="flex h-full flex-col justify-between overflow-y-auto bg-neutral-200 p-4 sm:rounded-2xl">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div className="font-semibold sm:text-xl">
                                {title}
                            </div>
                            <img
                                src={xmark}
                                alt="close"
                                className="h-5 cursor-pointer"
                                onClick={onClose}
                            />
                        </div>
                        {stickerPage ? (
                            <div className="h-full w-full">
                                <StickerFormComponent />
                            </div>
                        ) : (
                            <TaskFormComponent />
                        )}
                    </div>
                    <div className="flex justify-between gap-x-4">
                        {isEditOpen && (
                            <button
                                onClick={onDelete}
                                className="flex h-10 basis-1/2 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200  text-sm font-semibold"
                            >
                                {deleteBtn}
                            </button>
                        )}
                        <SaveButtonComponent
                            form={form as "sticker" | "task"}
                            style={isEditOpen ? "basis-1/2" : "basis-full"}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return render();
};

export default EditComponent;
