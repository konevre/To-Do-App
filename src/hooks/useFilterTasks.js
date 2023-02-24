import useLuxon from "./calendarHooks/useLuxon";
import useGetTodos from "./useGetTodos.js";
import useGetLists from "./useGetLists.js";

const useFilterTasks = (filter, props) => {
    const { todos } = useGetTodos();
    const { lists } = useGetLists();
    const { filterTasks } = useLuxon();

    const filterByfilter = (todos, filterArr) => {
        const list = filterArr.filter((item) => item.id === +props)[0];
        const filtered = todos.filter((item) => item.list === list.name);
        return filtered;
    };

    switch (filter) {
        case "today":
            return filterTasks(todos, "day");
        case "tomorrow":
            return filterTasks(todos, "day", 1);
        case "week":
            return filterTasks(todos, "week");
        case "list":
            return filterByfilter(todos, lists);
        default:
            break;
    }
};

export default useFilterTasks;
