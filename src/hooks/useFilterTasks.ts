import useLuxon from "./calendarHooks/useLuxon";
import useGetTodos from "./tasksHooks/useGetTodos";
import useGetLists from "./useGetLists";
import useGetTags from "./useGetTags";

import { Todo, Tag, Sticker, Filter } from "../types";

const useFilterTasks = (filter: Filter, props?: string | undefined) => {
    const { todos } = useGetTodos();
    const { lists } = useGetLists();
    const { tags } = useGetTags();
    const { filterTasks } = useLuxon();

    // TODO ???? list если одинаковые названия листа и тэга
    const filterByFilter = (todos: Todo[], filterArr: Tag[] | Sticker[]) => {
        if (props) {
            const list = filterArr.filter((item) => item.id === +props)[0];
            const filtered = todos.filter(
                (item) => item.list === list.name || item.tags === list.name
            );
            return filtered;
        }
        return todos;
    };

    const filterBySearch = (todos: Todo[]): Todo[] => {
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
            return todos;
    }
};

export default useFilterTasks;
