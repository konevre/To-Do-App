import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ["todos", "lists", "tags", "stickers"],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "/todos",
            providesTags: ["todos"],
        }),
        getSingleTodo: builder.query({
            query: (id) => `/todos/${id}`,
            providesTags: ["todos"],
        }),
        createTodo: builder.mutation({
            query: (todo) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["todos"],
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...todo }) => ({
                url: `/todos/${id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: ["todos"],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["todos"],
        }),
        getAllLists: builder.query({
            query: () => "/lists",
            providesTags: ["lists"],
        }),
        createList: builder.mutation({
            query: (list) => ({
                url: "/lists",
                method: "POST",
                body: list,
            }),
            invalidatesTags: ["lists"],
        }),
        getAllTags: builder.query({
            query: () => "/tags",
            providesTags: ["tags"],
        }),
        createTag: builder.mutation({
            query: (tag) => ({
                url: "/tags",
                method: "POST",
                body: tag,
            }),
            invalidatesTags: ["tags"],
        }),
        getAllStickers: builder.query({
            query: () => "/stickers",
            providesTags: ["stickers"],
        }),
        createSticker: builder.mutation({
            query: (sticker) => ({
                url: "/stickers",
                method: "POST",
                body: sticker,
            }),
            invalidatesTags: ["stickers"],
        }),
    }),
});

export const {
    useGetAllTodosQuery,
    useLazyGetSingleTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useGetAllListsQuery,
    useCreateListMutation,
    useGetAllTagsQuery,
    useCreateTagMutation,
    useGetAllStickersQuery,
    useCreateStickerMutation,
} = apiSlice;
