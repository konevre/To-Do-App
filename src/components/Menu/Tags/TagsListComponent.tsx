import React from "react";
import { useAppSelector } from "../../../store/hooks";
import TagsItemComponent from "./TagsItemComponent";

const TagListComponent: React.FC = () => {
    const { tags = [] } = useAppSelector((state) => state.tags);
    return (
        <>
            {tags.map((tag) => {
                return <TagsItemComponent tag={tag} key={tag.id} />;
            })}
        </>
    );
};

export default TagListComponent;
