import useFilterTasks from "./useFilterTasks";

import { Filter, Todo } from "../../types";

const useTodoBlock = (
    filter: Filter,
    props?: { id?: string; name?: string } | undefined
) => {
    const prop = props && (props.id || props.name);
    const todos = useFilterTasks(filter, prop);
    const todosLen = todos.length;
    const filterName =
        filter === "today" || filter === "tomorrow" ? filter : `this ${filter}`;

    return { todos, todosLen, filterName } as const;
};

export default useTodoBlock;
