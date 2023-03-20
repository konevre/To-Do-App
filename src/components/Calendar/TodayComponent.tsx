import React from "react";

import ColComponent from "./Grid/ColComponent";
import HoursComponent from "./HoursComponent";

const TodayComponent: React.FC = () => {
    return (
        <div className="grid h-full grid-cols-calendar grid-rows-calendar gap-x-2">
            <div className="grid grid-rows-week">
                <HoursComponent />
            </div>
            <div>
                <ColComponent index={0} />
            </div>
        </div>
    );
};

export default TodayComponent;
