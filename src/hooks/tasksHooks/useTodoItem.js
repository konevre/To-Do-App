import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { useUpdateTodoMutation } from "../../store/apiSlice";
import { showEdit } from "../../store/editSlice";
import { showMenu } from "../../store/menuSlice";

const useTodoItem = (task) => {
    const dispatch = useDispatch();
    const { isMenuOpen } = useSelector((state) => state.menu);
    const { edit } = useSelector((state) => state.edit);
    const { lists } = useSelector((state) => state.lists);
    const [updateTodo] = useUpdateTodoMutation();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });

    const taskList = lists.filter((item) => item.name === task.list)[0];
    const subLength = task.subtasks.length,
        dueDate = task.due_date;
    const taskExtra =
        subLength > 0 || task.list.length > 0 || dueDate.length > 0;

    const onTask = () => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showEdit(task));
    };

    const switchTodoState = () => {
        if (edit.isOpen && edit.task?.id === task.id) {
            alert("Please, finish editing first.");
        } else {
            const completedState = !task.completed;
            dispatch(updateTodo({ ...task, completed: completedState }));
        }
    };

    return { taskList, switchTodoState, onTask, taskExtra, dueDate, subLength };
};

export default useTodoItem;
