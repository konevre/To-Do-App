import { useMediaQuery } from "react-responsive";

import { useUpdateTodoMutation } from "../../store/api/apiEndpoints/todoEndpoints";
import { showTodo } from "../../store/editSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showMenu } from "../../store/menuSlice";
import { Todo } from "../../types";

const useTodoItem = (task: Todo) => {
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
        dispatch(showTodo(task));
    };

    const switchTodoState = () => {
        if (edit.isOpen && edit.task?.id === task.id) {
            alert("Please, finish editing first.");
        } else {
            const completedState = !task.completed;
            const updatedTask: Todo = { ...task, completed: completedState };
            updateTodo(updatedTask);
        }
    };

    return {
        taskList,
        switchTodoState,
        onTask,
        taskExtra,
        dueDate,
        subLength,
    } as const;
};

export default useTodoItem;
