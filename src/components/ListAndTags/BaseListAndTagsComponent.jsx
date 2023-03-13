import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import useFilterListAndTags from "../../hooks/useFilterListAndTags.js";
import { openModal, saveModalTasks } from "../../store/modalSlice.js";
import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

const BaseListAndTagsComponent = ({ filter }) => {
    const params = useParams();
    const [num, setNum] = useState(0);
    const filteredArr = useFilterListAndTags(filter);
    const filterName = filteredArr.find((item) => item.id === +params.id).name;

    const dispatch = useDispatch();
    const onOpen = () => {
        dispatch(openModal());
        dispatch(saveModalTasks(filterName));
    };

    return (
        <div className="relative">
            <HeaderComponent title={filterName} number={num} />
            <TaskBlock filter={filter} id={params.id} setNum={setNum} />
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
