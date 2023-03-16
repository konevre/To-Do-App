import { useMediaQuery } from "react-responsive";

import { useUpdateTodoMutation } from "../../store/apiSlice";
import { showEdit } from "../../store/editSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showMenu } from "../../store/menuSlice";
import { Todo, List } from "../../types";

interface TodoItemHook {
    taskList: List;
    switchTodoState: () => void;
    onTask: () => void;
    taskExtra: boolean;
    dueDate: string;
    subLength: number;
}

const useTodoItem = (task: Todo): TodoItemHook => {
    const dispatch = useAppDispatch();
    const { isMenuOpen } = useAppSelector((state) => state.menu);
    const { edit } = useAppSelector((state) => state.edit);
    const { lists } = useAppSelector((state) => state.lists);
    const [updateTodo] = useUpdateTodoMutation();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });

    const taskList = lists.filter((item) => item.name === task.list)[0];
    const subLength = task.subtasks.length,
        dueDate = task.due_date;
    const taskExtra =
        subLength > 0 || task.list.length > 0 || dueDate.length > 0;

    const onTask = (): void => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showEdit(task));
    };

    const switchTodoState = () => {
        if (edit.isOpen && edit.task?.id === task.id) {
            // TODO - модалку ?
            alert("Please, finish editing first.");
        } else {
            const completedState = !task.completed;
            const updatedTask = { ...task, completed: completedState };
            const taskID = task.id;
            // TODO - how to update???
            // dispatch(updateTodo(updatedTask));
        }
    };

    return { taskList, switchTodoState, onTask, taskExtra, dueDate, subLength };
};

export default useTodoItem;
