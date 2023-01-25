import React, { useState } from "react";

import useGetLists from "../../../hooks/useGetLists";

import useListForm from "../../../hooks/useListForm";

import plus from "../../../resources/icons/plus.svg";

import TagListFormComponent from "../../Forms/TagListFormComponent.jsx";

import ListItemComponent from "./ListItemComponent.jsx";

const ListComponent = () => {
    const {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
    } = useListForm();

    const { lists } = useGetLists();

    const [isNewList, setNewList] = useState(false);
    const onNewList = () => {
        setNewList(!isNewList);
    };

    const colorItems = colors.map((color, i) => {
        const active =
            i === activeColor ? "rounded border border-neutral-300" : "";
        return (
            <div
                key={i}
                className={`p-1.5 ${active}`}
                onClick={() => setColor(i)}
            >
                <div className={`h-4 w-4 rounded ${color}`}></div>
            </div>
        );
    });

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
                {isNewList && (
                    <TagListFormComponent
                        name="List"
                        initialState={initialState}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        activeColor={colors[activeColor]}
                        colorItems={colorItems}
                    />
                )}
            </div>
        </>
    );
};

export default ListComponent;
