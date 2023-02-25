import useLuxon from "./calendarHooks/useLuxon";
import useGetTodos from "./useGetTodos.js";
import useGetLists from "./useGetLists.js";
import useGetTags from "./useGetTags";

const useFilterTasks = (filter, props) => {
    const { todos } = useGetTodos();
    const { lists } = useGetLists();
    const { tags } = useGetTags();

    const { filterTasks } = useLuxon();

    const filterByFilter = (todos, filterArr) => {
        const list = filterArr.filter((item) => item.id === +props)[0];
        const filtered = todos.filter(
            (item) => item.list === list.name || item.tags === list.name
        );
        return filtered;
    };

    const filterBySearch = (todos) => {
        return todos.filter((item) => item.name === props);
    };

    switch (filter) {
        case "today":
            return filterTasks(todos, "day");
        case "tomorrow":
            return filterTasks(todos, "day", 1);
        case "week":
            return filterTasks(todos, "week");
        case "list":
            return filterByFilter(todos, lists);
        case "tag":
            return filterByFilter(todos, tags);
        case "search":
            return filterBySearch(todos);
        default:
            break;
    }
};

export default useFilterTasks;
