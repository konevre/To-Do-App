import { apiSlice } from "../../api/apiSlice";
import { Tag } from "../../../types";

export const tagApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
    }),
});

export const {
    useGetAllTagsQuery,
    useCreateTagMutation,
    useDeleteTagMutation,
} = tagApiSlice;
