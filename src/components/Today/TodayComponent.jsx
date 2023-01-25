/* eslint-disable indent */
import React from "react";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

const TodayComponent = () => {
    return (
        <>
            <HeaderComponent title="Today" />
            <TaskBlock />
        </>
    );
};

export default TodayComponent;
