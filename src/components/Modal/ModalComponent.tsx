import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDeleteTagMutation } from "../../store/api/apiEndpoints/tagEndpoints";
import { useDeleteTodoMutation } from "../../store/api/apiEndpoints/todoEndpoints";
import { useDeleteListMutation } from "../../store/api/apiEndpoints/listEndpoints";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { closeModal } from "../../store/modalSlice";
import { Todo } from "../../types";

const ModalComponent = () => {
    const { isModalOpen, modalTasks } = useAppSelector((state) => state.modal);
    const [deleteTodo] = useDeleteTodoMutation();
    const [deleteList] = useDeleteListMutation();
    const [deleteTag] = useDeleteTagMutation();
    const { todos } = useAppSelector((state) => state.tasks);
    const { lists } = useAppSelector((state) => state.lists);
    const { tags } = useAppSelector((state) => state.tags);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isList = useLocation().pathname.slice(1, 6) === "lists";
    const filterObj = isList
        ? {
              filterID: lists.find((item) => item.name === modalTasks)?.id,
              deleteFilter: deleteList,
          }
        : {
              filterID: tags.find((item) => item.name === modalTasks)?.id,
              deleteFilter: deleteTag,
          };

    const onClose = () => {
        dispatch(closeModal());
    };

    const deleteItems = async (item: Todo) => {
        if (isList) {
            if (item.list === modalTasks) {
                const id = item.id;
                // TODO
                await deleteTodo(id);
            }
        }
    };
    const onDelete = () => {
        todos.forEach(deleteItems);
        onClose();
        navigate(`/today`);
        const { filterID, deleteFilter } = filterObj;
        if (filterID) deleteFilter(filterID);
    };

    return (
        <>
            {isModalOpen && (
                <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-neutral-500/40">
                    <div className="flex h-60 w-1/3 flex-col rounded-md bg-slate-100 p-6">
                        <div className="mt-auto text-center text-xl">
                            {`If you delete "${modalTasks}", all the tasks will be
                            deleted as well`}
                            <br />
                            <br />
                            Are you sure?
                        </div>

                        <div className="mt-auto flex justify-end gap-x-3">
                            <button
                                onClick={onClose}
                                className="rounded-md bg-amber-400 px-2 py-1 text-slate-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onDelete}
                                className="rounded-md bg-red-600 px-2 py-1 text-slate-100"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalComponent;
