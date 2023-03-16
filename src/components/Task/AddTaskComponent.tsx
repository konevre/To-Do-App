import React from "react";

import useLayout from "../../hooks/useLayout";
import add from "../../resources/icons/plus.svg";

const AddTaskComponent: React.FC = () => {
    const { onEdit } = useLayout();
    return (
        <div
            onClick={onEdit}
            className="flex h-12 cursor-pointer flex-row rounded-lg border border-neutral-300 p-3.5"
        >
            <img src={add} alt="plus" className="h-full" />
            <div className="ml-3 flex items-center truncate text-base text-neutral-500">
                Add New Task
            </div>
        </div>
    );
};

export default AddTaskComponent;
