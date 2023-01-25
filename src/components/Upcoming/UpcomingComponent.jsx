import React from "react";

import useLayout from "../../hooks/useLayout.js";

import HeaderComponent from "../Header/HeaderComponent.jsx";
import TaskBlock from "../Task/TaskBlock.jsx";

const UpcomingComponent = () => {
    const { isAllOpen } = useLayout();

    const gridLg = isAllOpen
        ? "lg:grid-cols-1 lg:grid-rows-3"
        : "lg:grid-cols-2 lg:grid-rows-2";
    const colSpanLg = isAllOpen ? "lg:col-span-1" : "lg:col-span-2";

    return (
        <>
            <HeaderComponent title="Upcoming" />
            <div
                className={`grid grid-cols-1 grid-rows-3 gap-y-5 lg:gap-6 ${gridLg}`}
            >
                <div
                    className={`lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5 ${colSpanLg}`}
                >
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        Today
                    </div>
                    <TaskBlock />
                </div>
                <div className="lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5">
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        Tomorrow
                    </div>
                    <TaskBlock />
                </div>
                <div className="lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5">
                    <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                        This Week
                    </div>
                    <TaskBlock />
                </div>
            </div>
        </>
    );
};

export default UpcomingComponent;
