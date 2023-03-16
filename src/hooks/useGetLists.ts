import { useEffect } from "react";

import { List } from "../types";
import { saveLists } from "../store/listSlice";
import { useGetAllListsQuery } from "../store/apiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useGetLists = (): { lists: List[] } => {
    const { data, isSuccess } = useGetAllListsQuery();
    const { lists } = useAppSelector((state) => state.lists);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveLists(data));
    }, [data]);

    return { lists };
};

export default useGetLists;
