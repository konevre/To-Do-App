import { apiSlice } from "../../api/apiSlice";
import { List } from "../../../types";

export const listApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
    }),
});

export const {
    useGetAllListsQuery,
    useCreateListMutation,
    useDeleteListMutation,
} = listApiSlice;
