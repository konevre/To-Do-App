import useGetLists from "./useGetLists";
import useGetTags from "./useGetTags";

const useFilterListAndTags = (filter) => {
    const { tags } = useGetTags();
    const { lists } = useGetLists();

    if (filter === "list") {
        return lists;
    } else {
        return tags;
    }
};

export default useFilterListAndTags;
