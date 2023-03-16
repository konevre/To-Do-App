import React from "react";

interface ColorPickerProps {
    setActiveColor: (i: number) => void;
    activeColor: number;
    colors: string[];
}

// TODO - colors only TagColors or ListColors
const ColorPicker: React.FC<ColorPickerProps> = ({
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
