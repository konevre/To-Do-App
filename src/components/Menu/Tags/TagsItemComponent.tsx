import React from "react";
import { NavLink } from "react-router-dom";

import { Tag } from "../../../types";

interface ITagItemProps {
    tag: Tag;
}

const TagsItemComponent: React.FC<ITagItemProps> = ({ tag }) => {
    const { name, color, id } = tag;
    return (
        <NavLink to={`tags/${id}`}>
            <div
                className={`flex h-full items-center justify-center rounded ${color} p-2 text-sm`}
            >
                {name}
            </div>
        </NavLink>
    );
};

export default TagsItemComponent;
