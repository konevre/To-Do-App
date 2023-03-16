import useFilterTasks from "../useFilterTasks";

import { Filter, Todo } from "../../types";

interface TodoBlock {
    todos: Todo[];
    todosLen: number;
    filterName: string;
}

const useTodoBlock = (
    filter: Filter,
    props?: { id?: string; name?: string } | undefined
): TodoBlock => {
    const prop = props && (props.id || props.name);
    const todos = useFilterTasks(filter, prop);
    const todosLen = todos.length;
    const filterName =
        filter === "today" || filter === "tomorrow" ? filter : `this ${filter}`;

    return { todos, todosLen, filterName };
};

export default useTodoBlock;
