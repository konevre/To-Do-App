import React from "react";

const ColorPicker = ({ setColor, activeColor, colors }) => {
    return colors.map((color, i) => {
        const active =
            i === activeColor ? "rounded border border-neutral-300" : "";
        return (
            <div
                key={i}
                className={`p-1.5 ${active}`}
                onClick={() => setColor(i)}
            >
                <div className={`h-4 w-4 rounded ${color}`}></div>
            </div>
        );
    });
};

export default ColorPicker;
