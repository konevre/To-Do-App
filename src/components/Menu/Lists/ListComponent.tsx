import React, { useState } from "react";

import useGetLists from "../../../hooks/useGetLists";
import plus from "../../../resources/icons/plus.svg";
import TagListFormComponent from "../../Forms/TagListFormComponent";

import ListItemComponent from "./ListItemComponent";

const ListComponent: React.FC = () => {
    const { lists } = useGetLists();
    const [isNewList, setNewList] = useState(false);

    const onNewList = () => {
        setNewList(!isNewList);
    };

    return (
        <>
            <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                Lists
            </div>
            <div className="mt-3 flex flex-col">
                {lists &&
                    lists.map((list, i) => {
                        return <ListItemComponent key={i} list={list} />;
                    })}
                <div
                    className="flex h-10 cursor-pointer items-center rounded-lg px-5"
                    onClick={onNewList}
                >
                    <img src={plus} alt="upcoming" className="w-3" />
                    <div className="ml-2.5 text-sm font-normal">
                        Add New List
                    </div>
                </div>
                {isNewList && <TagListFormComponent name="List" />}
            </div>
        </>
    );
};

export default ListComponent;