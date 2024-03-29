import { useLocation } from "react-router-dom";

import { useDeleteTodoMutation } from "../store/api/apiEndpoints/todoEndpoints";
import { closeEdit, makeEditNull } from "../store/editSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteSticker } from "../store/stickerSlice";

const useEdit = () => {
    const { edit } = useAppSelector((state) => state.edit);
    const [deleteTodo] = useDeleteTodoMutation();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const stickerPage = location.pathname === "/notes";
    const title = stickerPage ? "Sticker:" : "Task";
    const deleteBtn = stickerPage ? "Delete sticker" : "Delete task";
    const form = stickerPage ? "sticker" : "task";
    const isEditOpen = edit.isOpen;
    const isHidden = isEditOpen
        ? "absolute top-0 z-10 translate-x-0 sm:static sm:z-0"
        : "absolute top-0 -z-10 translate-x-full delay-300 sm:static sm:z-0 sm:hidden";

    const transition =
        "transform transition duration-300 ease-in-out sm:transform-none";

    const onClose = () => {
        dispatch(closeEdit());
    };

    const onDelete = () => {
        dispatch(makeEditNull());
        if (stickerPage) {
            if (edit.sticker) dispatch(deleteSticker(edit.sticker.id));
        } else {
            if (edit.task) deleteTodo(edit.task.id);
        }
    };

    return {
        isHidden,
        isEditOpen,
        transition,
        stickerPage,
        onClose,
        onDelete,
        title,
        deleteBtn,
        form,
    } as const;
};

export default useEdit;
