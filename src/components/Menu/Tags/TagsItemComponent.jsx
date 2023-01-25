import React from "react";

const TagsItemComponent = ({ tag }) => {
    const { name, color } = tag;
    return (
        <div
            className={`flex h-full items-center justify-center rounded ${color} p-2 text-sm`}
        >
            {name}
        </div>
    );
};

export default TagsItemComponent;
