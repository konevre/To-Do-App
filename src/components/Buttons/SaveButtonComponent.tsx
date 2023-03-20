import React from "react";

interface ISaveButton {
    form: "sticker" | "task" | "tag" | "list";
    style?: string;
}

const SaveButtonComponent: React.FC<ISaveButton> = ({ form, style }) => {
    return (
        <button
            type="submit"
            form={form}
            className={`${style} flex h-10 items-center justify-center rounded-lg bg-amber-300 text-sm font-semibold`}
        >
            Save changes
        </button>
    );
};

export default SaveButtonComponent;
