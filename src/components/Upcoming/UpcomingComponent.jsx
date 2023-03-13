import React, { useState } from "react";

import useLayout from "../../hooks/useLayout.js";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

import UpcomingItemComponent from "./UpcomingItemComponent.jsx";

const UpcomingComponent = () => {
    const { isAllOpen } = useLayout();
    const [num, setNum] = useState(0);
    const gridLg = isAllOpen ? "lg:grid-cols-1" : "lg:grid-cols-2";
    const colSpanLg = isAllOpen ? "lg:col-span-1" : "lg:col-span-2";

    return (
        <>
            <HeaderComponent title="Upcoming" number={num} />
            <div
                className={`lg:grid-rows-auto grid basis-full grid-cols-1 gap-y-5 lg:gap-6 ${gridLg}`}
            >
                <UpcomingItemComponent title="Today" colSpanLg={colSpanLg}>
                    <TaskBlock filter={"today"} />
                </UpcomingItemComponent>
                <UpcomingItemComponent title="Tomorrow">
                    <TaskBlock filter={"tomorrow"} />
                </UpcomingItemComponent>
                <UpcomingItemComponent title="This Week">
                    <TaskBlock filter={"week"} setNum={setNum} />
                </UpcomingItemComponent>
            </div>
        </>
    );
};

export default UpcomingComponent;
