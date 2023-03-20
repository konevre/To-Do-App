import React, { useState } from "react";

import SaveButtonComponent from "../../Buttons/SaveButtonComponent";
import TagListFormComponent from "../../Forms/TagListFormComponent";
import TagListComponent from "./TagsListComponent";

const TagsComponent: React.FC = () => {
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
                <TagListComponent />
                <div
                    onClick={onTag}
                    className="flex h-full cursor-pointer items-center justify-center rounded bg-neutral-300 p-2 text-sm"
                >
                    {title}
                </div>
            </div>
            {isNewTag && (
                <>
                    <TagListFormComponent name="Tag" />
                    <SaveButtonComponent form="tag" style="mt-3 w-full" />
                </>
            )}
        </>
    );
};

export default TagsComponent;
