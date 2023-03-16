import { useEffect } from "react";

import { Tag } from "../types";
import { saveTags } from "../store/tagSlice";
import { useGetAllTagsQuery } from "../store/apiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const useGetTags = (): { tags: Tag[] } => {
    const { data, isSuccess } = useGetAllTagsQuery();
    const { tags } = useAppSelector((state) => state.tags);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveTags(data));
    }, [data]);

    return { tags };
};

export default useGetTags;
