import useFilterTasks from "../useFilterTasks";

const useTodoBlock = (filter, props) => {
    console.log(props);
    const prop = props.id || props.name;
    const todos = useFilterTasks(filter, prop);
    const todosLen = todos.length;
    const filterName =
        filter === "today" || filter === "tomorrow" ? filter : `this ${filter}`;

    return { todos, todosLen, filterName };
};

export default useTodoBlock;
