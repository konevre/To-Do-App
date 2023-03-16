import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Todo, Sticker, List, Tag } from "../types";

// TODO - посмотреть best practices TS - RTK Query
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ["todos", "lists", "tags", "stickers"],
    endpoints: (builder) => ({
        getAllTodos: builder.query<Todo[], void>({
            query: () => "/todos",
            providesTags: ["todos"],
        }),
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
        getAllLists: builder.query<List[], void>({
            query: () => "/lists",
            providesTags: ["lists"],
        }),
        createList: builder.mutation<{}, List>({
            query: (list) => ({
                url: "/lists",
                method: "POST",
                body: list,
            }),
            invalidatesTags: ["lists"],
        }),
        deleteList: builder.mutation<{}, string>({
            query: (id) => ({
                url: `/lists/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["lists"],
        }),
        getAllTags: builder.query<Tag[], void>({
            query: () => "/tags",
            providesTags: ["tags"],
        }),
        createTag: builder.mutation<{}, Tag>({
            query: (tag: Tag) => ({
                url: "/tags",
                method: "POST",
                body: tag,
            }),
            invalidatesTags: ["tags"],
        }),
        deleteTag: builder.mutation<{}, string>({
            query: (id) => ({
                url: `/tags/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["tags"],
        }),
        getAllStickers: builder.query<Sticker[], void>({
            query: () => "/stickers",
            providesTags: ["stickers"],
        }),
        createSticker: builder.mutation<{}, Sticker>({
            query: (sticker) => ({
                url: "/stickers",
                method: "POST",
                body: sticker,
            }),
            invalidatesTags: ["stickers"],
        }),
        updateSticker: builder.mutation<{}, Sticker>({
            query: ({ id, ...sticker }) => ({
                url: `/stickers/${id}`,
                method: "PUT",
                body: sticker,
            }),
            invalidatesTags: ["stickers"],
        }),
        deleteSticker: builder.mutation<{}, string>({
            query: (id) => ({
                url: `/stickers/${id}`,
                method: "DELETE",
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
    useDeleteListMutation,
    useGetAllTagsQuery,
    useCreateTagMutation,
    useDeleteTagMutation,
    useGetAllStickersQuery,
    useCreateStickerMutation,
    useDeleteStickerMutation,
    useUpdateStickerMutation,
} = apiSlice;
