import { List, Tag } from "../types";
import useGetLists from "./useGetLists";
import useGetTags from "./useGetTags";

const useFilterListAndTags = (filter: "list" | "tag"): List[] | Tag[] => {
    const { tags } = useGetTags();
    const { lists } = useGetLists();

    return filter === "list" ? lists : tags;
};

export default useFilterListAndTags;
