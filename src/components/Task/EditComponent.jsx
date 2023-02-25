/* eslint-disable indent */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import xmark from "../../resources/icons/xmark.svg";
import { closeEdit, makeEditNull } from "../../store/editSlice";
import StickerForm from "../Forms/StickerForm.jsx";
import TaskFormComponent from "../Forms/TaskFormComponent.jsx";
import {
    useDeleteStickerMutation,
    useDeleteTodoMutation,
} from "../../store/apiSlice";

const EditComponent = () => {
    const location = useLocation();
    const stickerPage = location.pathname === "/notes";
    const title = stickerPage ? "Sticker:" : "Task";
    const deleteBtn = stickerPage ? "Delete sticker" : "Delete task";
    const form = stickerPage ? "sticker" : "task";

    const [deleteSticker] = useDeleteStickerMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const { isEditOpen } = useSelector((state) => state.edit);
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(closeEdit());
    };

    const onDelete = () => {
        dispatch(makeEditNull());
        if (stickerPage) {
            console.log(isEditOpen.sticker.id);
            deleteSticker(isEditOpen.sticker.id);
        } else {
            deleteTodo(isEditOpen.task.id);
        }
    };

    const isHidden = isEditOpen.isOpen
        ? "absolute top-0 z-10 translate-x-0 sm:static sm:z-0"
        : "absolute top-0 -z-10 translate-x-full delay-300 sm:static sm:z-0 sm:hidden";

    const transition =
        "transform transition duration-300 ease-in-out sm:transform-none";

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
                        {/* FORM */}
                        {stickerPage ? (
                            <div className="h-full w-full">
                                <StickerForm />
                            </div>
                        ) : (
                            <TaskFormComponent />
                        )}
                    </div>
                    <div className="flex justify-between gap-x-4">
                        {isEditOpen.isOpen && (
                            <button
                                onClick={onDelete}
                                className="flex h-10 basis-1/2 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200  text-sm font-semibold"
                            >
                                {deleteBtn}
                            </button>
                        )}
                        <button
                            type="submit"
                            form={form}
                            className={`flex h-10 ${
                                isEditOpen.isOpen ? "basis-1/2" : "basis-full"
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

export default EditComponent;
