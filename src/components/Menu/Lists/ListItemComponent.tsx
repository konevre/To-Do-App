import React from "react";

import useFilterTasks from "../../../hooks/useFilterTasks";
import { List } from "../../../types";

import CustomLink from "../CustomLink/CustomLinkComponent";

interface ListItemProps {
    list: List;
}

const ListItemComponent: React.FC<ListItemProps> = ({ list }) => {
    const { name, color, id } = list;
    const len = useFilterTasks("list", id).length;

    return (
        <CustomLink
            to={`lists/${id}`}
            title={name}
            number={len}
            color={color}
        />
    );
};

export default ListItemComponent;
