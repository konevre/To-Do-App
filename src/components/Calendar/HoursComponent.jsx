import React from "react";

const HoursComponent = () => {
    return [...new Array(24)].map((_, i) => {
        return (
            <div className="flex items-center justify-center border border-slate-100 border-b-neutral-200 text-center text-xs last:border-slate-100">{`${i}:00`}</div>
        );
    });
};

export default HoursComponent;
