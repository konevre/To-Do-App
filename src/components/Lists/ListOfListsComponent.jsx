import React from "react";
import { useParams } from "react-router-dom";

import HeaderComponent from "../Header/HeaderComponent.jsx";

import TaskBlock from "../Task/TaskBlock.jsx";

const ListOfListsComponent = () => {
    const params = useParams();

    return (
        <div>
            <HeaderComponent title="List" />
            <TaskBlock filter={"list"} id={params.id} />
        </div>
    );
};

export default ListOfListsComponent;
