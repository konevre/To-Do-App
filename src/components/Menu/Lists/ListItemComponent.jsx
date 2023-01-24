import React from "react";

const ListItemComponent = ({ list }) => {
    const { name, color } = list;
    return (
        <div className="flex h-10 items-center rounded-lg px-5">
            <div
                className={`h-4 w-4 rounded ${color} text-center text-xs font-semibold text-neutral-600`}
            ></div>
            <div className="ml-2.5 text-sm font-normal">{name}</div>
            <div className="ml-auto h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                5
            </div>
        </div>
    );
};

export default ListItemComponent;
