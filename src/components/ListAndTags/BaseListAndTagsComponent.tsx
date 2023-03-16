import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import useFilterListAndTags from "../../hooks/useFilterListAndTags";
import { openModal, saveModalTasks } from "../../store/modalSlice";
import HeaderComponent from "../Header/HeaderComponent";
import TaskBlock from "../Task/TaskBlock";

interface BaseListAndTagProps {
    filter: "list" | "tag";
}

const BaseListAndTagsComponent: React.FC<BaseListAndTagProps> = ({
    filter,
}) => {
    const params = useParams();
    const [num, setNum] = useState<number>(0);
    const filteredArr = useFilterListAndTags(filter);
    const filterName = filteredArr.filter((item) => item.id === params.id)[0]
        .name;

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
            <TaskBlock
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
