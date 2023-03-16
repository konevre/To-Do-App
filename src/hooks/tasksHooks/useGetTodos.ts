import { useEffect } from "react";

import { Todo } from "../../types";
import { useGetAllTodosQuery } from "../../store/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { saveTodos } from "../../store/todoSlice";

const useGetTodos = (): { todos: Todo[] } => {
    const { data, isSuccess } = useGetAllTodosQuery();
    const { todos } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveTodos(data));
    }, [data]);

    return { todos };
};

export default useGetTodos;
