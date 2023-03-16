import React from "react";

import useLayout from "../../hooks/useLayout";

import bars from "../../resources/icons/bars.svg";
import plus from "../../resources/icons/plus.svg";

import { makeEditNull } from "../../store/editSlice";
import { useAppDispatch } from "../../store/hooks";

interface HeaderProps {
    title: string | null;
    number: number;
}

interface AdditionTitle {
    [key: string]: JSX.Element;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title, number }) => {
    const { isMenuOpen, onMenu, location, isMoreThan1024 } = useLayout();
    const dispatch = useAppDispatch();

    // TODO - сделать хук ?
    const add: AdditionTitle = {
        "/notes": (
            <div className="ml-auto h-5 cursor-pointer lg:hidden">
                <img
                    src={plus}
                    alt="add"
                    className="h-full"
                    onClick={() => dispatch(makeEditNull())}
                />
            </div>
        ),
        "/calendar": isMoreThan1024 ? (
            <button
                onClick={() => dispatch(makeEditNull())}
                className="ml-auto cursor-pointer rounded-lg border border-neutral-300 py-2 px-4"
            >
                Add Task
            </button>
        ) : (
            <div className="ml-auto h-5 cursor-pointer lg:hidden">
                <img
                    src={plus}
                    alt="add"
                    className="h-full"
                    onClick={() => dispatch(makeEditNull())}
                />
            </div>
        ),
    };

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
            {number !== 0 && (
                <div className="font-base ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 sm:ml-5 sm:h-10 sm:w-10">
                    {number}
                </div>
            )}
            {add[location]}
        </div>
    );
};

export default HeaderComponent;
