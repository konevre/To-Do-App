import { useAppSelector } from "../store/hooks";
import { List, Tag } from "../types";

const useFilterListAndTags = (filter: "list" | "tag"): List[] | Tag[] => {
    const { lists } = useAppSelector((state) => state.lists);
    const { tags } = useAppSelector((state) => state.tags);

    return filter === "list" ? lists : tags;
};

export default useFilterListAndTags;
