import React from "react";
import { useAppSelector } from "../../../store/hooks";
import ListItemComponent from "./ListItemComponent";

const ListListComponent = () => {
    const { lists = [] } = useAppSelector((state) => state.lists);
    return (
        <>
            {lists.map((list) => {
                return <ListItemComponent key={list.id} list={list} />;
            })}
        </>
    );
};

export default ListListComponent;
