import React from "react";
import { Link, useMatch } from "react-router-dom";

interface ICustomLinkProps {
    to: string;
    title: string;
    number?: number;
    icon?: string;
    color?: string;
    [propName: string]: any;
}

const CustomLink: React.FC<ICustomLinkProps> = ({
    to,
    title,
    number,
    icon,
    color,
    ...props
}) => {
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
                {icon && <img src={icon} alt={title} className="w-3.5" />}
                {color && (
                    <div
                        className={`h-4 w-4 rounded ${color} text-center text-xs font-semibold text-neutral-600`}
                    ></div>
                )}
                <div className="ml-2.5 text-sm font-normal">{title}</div>
                <div
                    className={`${styledInner} ml-auto h-4 w-6 text-center text-xs font-semibold text-neutral-600`}
                >
                    {number !== 0 && number}
                </div>
            </div>
        </Link>
    );
};

export default CustomLink;
