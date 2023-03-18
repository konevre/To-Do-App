import React from "react";

import { TagColor, ListColor } from "../../types";

interface IColorPickerProps {
    setActiveColor: (i: number) => void;
    activeColor: number;
    colors: TagColor[] | ListColor[];
}

const ColorPicker: React.FC<IColorPickerProps> = ({
    setActiveColor,
    activeColor,
    colors,
}) => {
    return (
        <>
            {colors.map((color, i) => {
                const active =
                    i === activeColor
                        ? "rounded border border-neutral-300"
                        : "";
                return (
                    <div
                        key={i}
                        className={`p-1.5 ${active}`}
                        onClick={() => setActiveColor(i)}
                    >
                        <div className={`h-4 w-4 rounded ${color}`}></div>
                    </div>
                );
            })}
        </>
    );
};

export default ColorPicker;
