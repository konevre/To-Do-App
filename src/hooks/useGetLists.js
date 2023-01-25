import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveLists } from "../store/listSlice";
import { useGetAllListsQuery } from "../store/apiSlice";

const useGetLists = () => {
    const { data, isSuccess } = useGetAllListsQuery();
    const { lists } = useSelector((state) => state.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveLists(data));
    }, [data]);

    return { lists };
};

export default useGetLists;
