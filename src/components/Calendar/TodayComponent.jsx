import React from "react";

import ColComponent from "./Grid/ColComponent.jsx";
import HoursComponent from "./HoursComponent.jsx";

const TodayComponent = () => {
    return (
        <div className="grid h-full grid-cols-calendar grid-rows-calendar gap-x-2">
            <div className="grid grid-rows-week">
                <HoursComponent />
            </div>
            <div>
                <ColComponent />
            </div>
        </div>
    );
};

export default TodayComponent;
