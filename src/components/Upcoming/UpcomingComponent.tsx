import React, { useState } from "react";

import useLayout from "../../hooks/useLayout";

import HeaderComponent from "../Header/HeaderComponent";
import TaskBlockComponent from "../Task/TaskBlockComponent";

import UpcomingItemComponent from "./UpcomingItemComponent";

const UpcomingComponent: React.FC = () => {
    const { isAllOpen } = useLayout();
    const [num, setNum] = useState<number>(0);
    const gridLg = isAllOpen ? "lg:grid-cols-1" : "lg:grid-cols-2";
    const colSpanLg = isAllOpen ? "lg:col-span-1" : "lg:col-span-2";

    const setHeaderNum = (number: number) => {
        setNum(number);
    };

    return (
        <>
            <HeaderComponent title="Upcoming" number={num} />
            <div
                className={`lg:grid-rows-auto grid basis-full grid-cols-1 gap-y-5 lg:gap-6 ${gridLg}`}
            >
                <UpcomingItemComponent title="Today" colSpanLg={colSpanLg}>
                    <TaskBlockComponent filter={"today"} />
                </UpcomingItemComponent>
                <UpcomingItemComponent title="Tomorrow">
                    <TaskBlockComponent filter={"tomorrow"} />
                </UpcomingItemComponent>
                <UpcomingItemComponent title="This Week">
                    <TaskBlockComponent
                        filter={"week"}
                        setHeaderNum={setHeaderNum}
                    />
                </UpcomingItemComponent>
            </div>
        </>
    );
};

export default UpcomingComponent;
