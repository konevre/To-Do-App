import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { openModal, saveModalTasks } from "../../store/modalSlice";
import { Tag, List } from "../../types";
import HeaderComponent from "../Header/HeaderComponent";
import TaskBlockComponent from "../Task/TaskBlockComponent";

interface IBaseListAndTagProps {
    filter: "list" | "tag";
}

const BaseListAndTagsComponent: React.FC<IBaseListAndTagProps> = ({
    filter,
}) => {
    const params = useParams();
    const [num, setNum] = useState<number>(0);
    const { lists } = useAppSelector((state) => state.lists);
    const { tags } = useAppSelector((state) => state.tags);

    const filterName =
        filter === "list"
            ? lists.filter((item: List) => item.id === params.id)[0]?.name
            : tags.filter((item: Tag) => item.id === params.id)[0]?.name;

    const dispatch = useDispatch();
    const setHeaderNum = (number: number) => {
        setNum(number);
    };
    const onOpen = () => {
        dispatch(openModal());
        dispatch(saveModalTasks(filterName));
    };

    return (
        <div className="relative">
            <HeaderComponent title={filterName} number={num} />
            <TaskBlockComponent
                filter={filter}
                id={params.id}
                setHeaderNum={setHeaderNum}
            />
            <div className="mt-3 flex justify-end">
                <button
                    onClick={onOpen}
                    className="rounded-md bg-red-600 px-2 py-1 text-slate-100"
                >{`Delete ${filter}`}</button>
            </div>
        </div>
    );
};

export default BaseListAndTagsComponent;
