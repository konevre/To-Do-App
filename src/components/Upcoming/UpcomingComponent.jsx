import React, { useState } from "react";

import useLayout from "../../hooks/useLayout.js";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

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
                <div
                    className={`lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5 ${colSpanLg}`}
                >
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        Today
                    </div>
                    <TaskBlock filter={"today"} />
                </div>
                <div className="lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5">
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        Tomorrow
                    </div>
                    <TaskBlock filter={"tomorrow"} />
                </div>
                <div className="lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5">
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        This Week
                    </div>
                    <TaskBlock filter={"week"} setNum={setNum} />
                </div>
            </div>
        </>
    );
};

export default UpcomingComponent;
