import React from "react";

import useLayout from "../../hooks/useLayout";

import bars from "../../resources/icons/bars.svg";

const HeaderComponent = ({ title }) => {
    const { isMenuOpen, onMenu } = useLayout();
    return (
        <div className="mb-8 flex items-center">
            {!isMenuOpen && (
                <img
                    src={bars}
                    alt="bars"
                    className="h-5 cursor-pointer"
                    onClick={onMenu}
                />
            )}

            <div
                className={`${
                    isMenuOpen ? "ml-0" : "ml-8"
                } flex items-center text-2xl font-semibold sm:text-4xl`}
            >
                {title}
            </div>
            <div className="font-base  ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 sm:ml-5 sm:h-10 sm:w-10">
                5
            </div>
        </div>
    );
};

export default HeaderComponent;
