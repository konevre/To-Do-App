import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveTags } from "../store/tagSlice";
import { useGetAllTagsQuery } from "../store/apiSlice";

const useGetTags = () => {
    const { data, isSuccess } = useGetAllTagsQuery();
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveTags(data));
    }, [data]);

    return { tags };
};

export default useGetTags;
