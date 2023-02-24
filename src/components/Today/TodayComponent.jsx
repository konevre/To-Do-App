/* eslint-disable indent */
import React, { useState } from "react";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

const TodayComponent = () => {
    const [num, setNum] = useState(0);
    return (
        <>
            <HeaderComponent title="Today" number={num} />
            <TaskBlock filter={"today"} setNum={setNum} />
        </>
    );
};

export default TodayComponent;
