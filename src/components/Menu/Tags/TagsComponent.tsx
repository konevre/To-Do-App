import React, { useState } from "react";

import { useAppSelector } from "../../../store/hooks";
import SaveButton from "../../Buttons/SaveButton";
import TagListFormComponent from "../../Forms/TagListFormComponent";

import TagsItemComponent from "./TagsItemComponent";

const TagsComponent: React.FC = () => {
    const { tags } = useAppSelector((state) => state.tags);
    const [isNewTag, setNewTag] = useState<boolean>(false);

    const onTag = () => {
        setNewTag(!isNewTag);
    };

    const title = isNewTag ? "Close Tag" : "+ Add Tag";

    return (
        <>
            <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                Tags
            </div>
            <div className="mt-3 flex min-h-min flex-wrap gap-1">
                {tags &&
                    tags.map((tag) => {
                        return <TagsItemComponent tag={tag} key={tag.id} />;
                    })}
                <div
                    onClick={onTag}
                    className="flex h-full cursor-pointer items-center justify-center rounded bg-neutral-300 p-2 text-sm"
                >
                    {title}
                </div>
            </div>
            {isNewTag && <TagListFormComponent name="Tag" />}
            {isNewTag && <SaveButton form="tag" style="mt-3 w-full" />}
        </>
    );
};

export default TagsComponent;
