import React, { useState } from "react";

import useGetTags from "../../../hooks/useGetTags";

import useTagForm from "../../../hooks/formHooks/useTagForm.jsx";

import TagListFormComponent from "../../Forms/TagListFormComponent.jsx";

import TagsItemComponent from "./TagsItemComponent.jsx";

const TagsComponent = () => {
    const { tags } = useGetTags();
    const [isNewTag, setNewTag] = useState(false);

    const onTag = () => {
        setNewTag(!isNewTag);
    };

    const {
        activeColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
        colorItems,
    } = useTagForm();

    return (
        <>
            <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                Tags
            </div>
            <div className="mt-3 flex min-h-min flex-wrap gap-1">
                {tags &&
                    tags.map((tag, i) => {
                        return <TagsItemComponent tag={tag} key={i} />;
                    })}
                <div
                    onClick={onTag}
                    className="flex h-full cursor-pointer items-center justify-center rounded bg-neutral-300 p-2 text-sm"
                >
                    + Add Tag
                </div>
            </div>
            {isNewTag && (
                <TagListFormComponent
                    name="Tag"
                    initialState={initialState}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    activeColor={colors[activeColor]}
                    colorItems={colorItems}
                />
            )}
        </>
    );
};

export default TagsComponent;
