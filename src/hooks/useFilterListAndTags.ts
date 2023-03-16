import useGetLists from "./useGetLists";
import useGetTags from "./useGetTags";

const useFilterListAndTags = (filter: "list" | "tag") => {
    const { tags } = useGetTags();
    const { lists } = useGetLists();

    return filter === "list" ? lists : tags;
};

export default useFilterListAndTags;
