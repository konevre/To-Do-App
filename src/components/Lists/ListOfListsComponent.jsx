import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useGetLists from "../../hooks/useGetLists.js";

import HeaderComponent from "../Header/HeaderComponent.jsx";

import TaskBlock from "../Task/TaskBlock.jsx";

const ListOfListsComponent = () => {
    const params = useParams();
    const [num, setNum] = useState(0);

    const { lists } = useGetLists();
    const listName = lists.find((item) => item.id === +params.id).name;

    return (
        <div>
            <HeaderComponent title={listName} number={num} />
            <TaskBlock filter={"list"} id={params.id} setNum={setNum} />
        </div>
    );
};

export default ListOfListsComponent;
