/* eslint-disable indent */

import React from "react";

import useLayout from "../../hooks/useLayout";

const LayoutComponent = ({ children }) => {
    const { isMenuOpen, isEditOpen } = useLayout();

    const basis =
        isMenuOpen && isEditOpen.isOpen
            ? "sm:basis-5/12" // menu, main, task
            : isMenuOpen
            ? "absolute top-0 -z-10 translate-x-full delay-300 sm:block sm:static sm:basis-2/3 lg:basis-3/4 sm:z-0" // menu + main
            : isEditOpen.isOpen
            ? "absolute top-0 -z-10 -translate-x-full delay-300 sm:block sm:static sm:basis-1/2 lg:basis-2/3 sm:z-0" // main + task
            : "absolute top-0 z-10 translate-x-0 sm:basis-full sm:static lg:basis-full sm:z-0"; // main only

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
