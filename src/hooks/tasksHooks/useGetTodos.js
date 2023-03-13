import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetAllTodosQuery } from "../../store/apiSlice";
import { saveTodos } from "../../store/todoSlice";

const useGetTodos = () => {
    const { data, isSuccess } = useGetAllTodosQuery();
    const { todos } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveTodos(data));
    }, [data]);

    return { todos };
};

export default useGetTodos;
