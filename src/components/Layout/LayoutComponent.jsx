/* eslint-disable indent */

import React from "react";

import useLayout from "../../hooks/useLayout";

const LayoutComponent = ({ children }) => {
    const { basis } = useLayout();

    return (
        <div
            className={`h-full w-full transform bg-slate-100 transition duration-300 ease-in-out sm:transform-none ${basis}`}
        >
            <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden p-4 sm:pb-0">
                {children}
            </div>
        </div>
    );
};

export default LayoutComponent;
