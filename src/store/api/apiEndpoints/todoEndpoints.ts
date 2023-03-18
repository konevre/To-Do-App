import { apiSlice } from "../../api/apiSlice";
import { Todo } from "../../../types";

export const todoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTodos: builder.query<Todo[], void>({
            // query: () => ({ url: "/todos", params: { list: "work" } }),
            query: () => "/todos",
            providesTags: ["todos"],
        }),
        // getAllTodosTest: builder.query<
        //     Todo[],
        //     { filters?: { [key: string]: string } }
        // >({
        //     query: ({ filters }) => ({
        //         url: "/todos",
        //         params: filters,
        //     }),
        //     providesTags: ["todos"],
        // }),
        getSingleTodo: builder.query<Todo, string>({
            query: (id) => `/todos/${id}`,
            providesTags: ["todos"],
        }),
        createTodo: builder.mutation<{}, Todo>({
            query: (todo) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["todos"],
        }),
        updateTodo: builder.mutation<{}, Todo>({
            query: ({ id, ...todo }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: ["todos"],
        }),
        deleteTodo: builder.mutation<{}, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["todos"],
        }),
    }),
});

export const {
    useGetAllTodosQuery,
    useLazyGetSingleTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApiSlice;
