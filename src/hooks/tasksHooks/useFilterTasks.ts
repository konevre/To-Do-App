import useLuxon from "../calendarHooks/useLuxon";

import { Todo, Filter } from "../../types";
import { useAppSelector } from "../../store/hooks";

const useFilterTasks = (filter: Filter, props?: string | undefined) => {
    const { todos } = useAppSelector((state) => state.tasks);
    const { lists } = useAppSelector((state) => state.lists);
    const { tags } = useAppSelector((state) => state.tags);

    const { filterTasks } = useLuxon();

    const filterByProp = <T extends { id: string; name: string }>(
        todos: Todo[],
        items: T[],
        propName: keyof Todo
    ) => {
        if (props) {
            const arr = items.filter((item) => item.id === props)[0];
            const filtered = todos.filter(
                (item) => item[propName] === arr?.name
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
            return filterByProp(todos, lists, "list");
        case "tag":
            return filterByProp(todos, tags, "tags");
        case "search":
            return filterBySearch(todos);
        default:
            return todos;
    }
};

export default useFilterTasks;
