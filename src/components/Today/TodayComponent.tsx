/* eslint-disable indent */
import React, { useState } from "react";

import HeaderComponent from "../Header/HeaderComponent";
import TaskBlock from "../Task/TaskBlock";

const TodayComponent: React.FC = () => {
    const [num, setNum] = useState<number>(0);
    const setHeaderNum = (number: number) => {
        setNum(number);
    };
    return (
        <>
            <HeaderComponent title="Today" number={num} />
            <TaskBlock filter={"today"} setHeaderNum={setHeaderNum} />
        </>
    );
};

export default TodayComponent;
