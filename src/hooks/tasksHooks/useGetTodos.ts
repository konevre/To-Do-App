import { useEffect } from "react";

import { Todo } from "../../types";
import { useGetAllTodosQuery } from "../../store/api/apiEndpoints/todoEndpoints";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { saveTodos } from "../../store/todoSlice";

const useGetTodos = (): { todos: Todo[] } => {
    // const { data, isSuccess } = useGetAllTodosQuery();
    // const dispatch = useAppDispatch();
    const { todos } = useAppSelector((state) => state.tasks);

    // useEffect(() => {
    //     if (isSuccess) dispatch(saveTodos(data));
    // }, [data]);

    return { todos };
};

export default useGetTodos;
