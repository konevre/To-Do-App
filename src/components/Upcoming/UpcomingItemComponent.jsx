import React from "react";

const UpcomingItemComponent = ({ children, title, colSpanLg = "" }) => {
    return (
        <div
            className={`lg:rounded-lg lg:border lg:border-neutral-300 lg:p-5 ${colSpanLg}`}
        >
            <div className="mb-5 font-semibold sm:text-xl lg:text-2xl">
                {title}
            </div>
            {children}
        </div>
    );
};

export default UpcomingItemComponent;
