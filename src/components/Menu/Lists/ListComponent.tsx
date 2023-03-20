import React, { useState } from "react";

import plus from "../../../resources/icons/plus.svg";
import xmark from "../../../resources/icons/xmark.svg";
import TagListFormComponent from "../../Forms/TagListFormComponent";

import SaveButtonComponent from "../../Buttons/SaveButtonComponent";
import ListListComponent from "./ListListComponent";

const ListComponent: React.FC = () => {
    const [isNewList, setNewList] = useState<boolean>(false);

    const onNewList = () => {
        setNewList(!isNewList);
    };
    const title = isNewList ? "Close List" : "Add New List";
    return (
        <>
            <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                Lists
            </div>
            <div className="mt-3 flex flex-col">
                <ListListComponent />
                <div
                    className="flex h-10 cursor-pointer items-center rounded-lg px-5"
                    onClick={onNewList}
                >
                    <img
                        src={isNewList ? xmark : plus}
                        alt="upcoming"
                        className="w-3"
                    />
                    <div className="ml-2.5 text-sm font-normal">{title}</div>
                </div>
                {isNewList && (
                    <>
                        <TagListFormComponent name="List" />
                        <SaveButtonComponent form="list" style="mt-3" />
                    </>
                )}
            </div>
        </>
    );
};

export default ListComponent;
