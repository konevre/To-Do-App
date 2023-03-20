import { useLocation, useNavigate } from "react-router-dom";

import { useDeleteTagMutation } from "../store/api/apiEndpoints/tagEndpoints";
import { useDeleteTodoMutation } from "../store/api/apiEndpoints/todoEndpoints";
import { useDeleteListMutation } from "../store/api/apiEndpoints/listEndpoints";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal } from "../store/modalSlice";
import { Todo } from "../types";

const useModal = () => {
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
        const id = item.id;
        if (isList) {
            if (item.list === modalTasks) {
                await deleteTodo(id);
            }
        } else {
            if (item.tags === modalTasks) {
                await deleteTodo(id);
            }
        }
    };
    const onDelete = () => {
        todos.forEach(deleteItems);
        const { filterID, deleteFilter } = filterObj;
        if (filterID) deleteFilter(filterID);
        onClose();
        navigate(`/today`);
    };

    return { isModalOpen, modalTasks, onClose, onDelete };
};

export default useModal;
