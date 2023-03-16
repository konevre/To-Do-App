import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Todo, Sticker, List, Tag } from "../types";

// TODO - посмотреть best practices TS - RTK Query
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ["todos", "lists", "tags", "stickers"],
    endpoints: (builder) => ({
        // TODO - вместо ANY - todo[]???
        getAllTodos: builder.query<any, void>({
            query: () => "/todos",
            providesTags: ["todos"],
        }),
        getSingleTodo: builder.query({
            query: (id: number) => `/todos/${id}`,
            providesTags: ["todos"],
        }),
        createTodo: builder.mutation({
            query: (todo: Todo) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["todos"],
        }),
        // TODO - wtf ??
        updateTodo: builder.mutation<{}, Todo>({
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
        getAllLists: builder.query<any, void>({
            query: () => "/lists",
            providesTags: ["lists"],
        }),
        createList: builder.mutation({
            query: (list: List) => ({
                url: "/lists",
                method: "POST",
                body: list,
            }),
            invalidatesTags: ["lists"],
        }),
        deleteList: builder.mutation({
            query: (id: number) => ({
                url: `/lists/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["lists"],
        }),
        getAllTags: builder.query<any, void>({
            query: () => "/tags",
            providesTags: ["tags"],
        }),
        createTag: builder.mutation({
            query: (tag: Tag) => ({
                url: "/tags",
                method: "POST",
                body: tag,
            }),
            invalidatesTags: ["tags"],
        }),
        deleteTag: builder.mutation({
            query: (id: number) => ({
                url: `/tags/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["tags"],
        }),
        getAllStickers: builder.query<any, void>({
            query: () => "/stickers",
            providesTags: ["stickers"],
        }),
        createSticker: builder.mutation({
            query: (sticker: Sticker) => ({
                url: "/stickers",
                method: "POST",
                body: sticker,
            }),
            invalidatesTags: ["stickers"],
        }),
        updateSticker: builder.mutation({
            query: ({ id, ...sticker }: { id: number; sticker: Sticker }) => ({
                url: `/stickers/${id}`,
                method: "PUT",
                body: sticker,
            }),
            invalidatesTags: ["stickers"],
        }),
        deleteSticker: builder.mutation({
            query: (id: number) => ({
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
