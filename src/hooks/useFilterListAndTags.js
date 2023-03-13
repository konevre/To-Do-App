import useGetLists from "./useGetLists";
import useGetTags from "./useGetTags";

const useFilterListAndTags = (filter) => {
    const { tags } = useGetTags();
    const { lists } = useGetLists();

    return filter === "list" ? lists : tags;
};

export default useFilterListAndTags;
