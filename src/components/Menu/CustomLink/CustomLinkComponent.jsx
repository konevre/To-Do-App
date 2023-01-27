import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, title, number, icon, ...props }) => {
    const match = useMatch(to);
    const styledContainer = match ? "rounded-lg bg-neutral-300" : "";
    const styledInner =
        match && number
            ? "rounded bg-slate-100"
            : number
            ? "rounded bg-neutral-300"
            : "";

    return (
        <Link to={to} {...props}>
            <div className={`${styledContainer} flex h-10 items-center px-5`}>
                <img src={icon} alt="upcoming" className="w-3.5" />
                <div className="ml-2.5 text-sm font-normal">{title}</div>
                <div
                    className={`${styledInner} ml-auto h-4 w-6 text-center text-xs font-semibold text-neutral-600`}
                >
                    {number}
                </div>
            </div>
        </Link>
    );
};

export default CustomLink;
