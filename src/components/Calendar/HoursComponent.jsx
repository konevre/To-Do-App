import React from "react";

import useLuxon from "../../hooks/calendarHooks/useLuxon";

const HoursComponent = () => {
    const { to12 } = useLuxon();

    return [...new Array(24)].map((_, i) => {
        return (
            <div className="flex items-center justify-center border border-slate-100 border-b-neutral-200 text-center text-xs last:border-slate-100">
                {to12(i)}
            </div>
        );
    });
};

export default HoursComponent;
