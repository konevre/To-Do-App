import React from "react";
import { changeState } from "../../store/calendarSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { Range } from "../../types";
import { toCapitalCase } from "../../utils/utils";

interface RangeSelectorProps {
    selector: Range;
}

const RangeSelectorComponent: React.FC<RangeSelectorProps> = ({ selector }) => {
    const dispatch = useAppDispatch();
    const { activeState } = useAppSelector((state) => state.calendar);

    const onActiveState = (state: Range) => {
        dispatch(changeState(state));
    };

    return (
        <div
            onClick={() => onActiveState(selector)}
            className={`${
                activeState === selector ? "bg-neutral-400" : "bg-slate-100"
            } basis-1/3 cursor-pointer items-center justify-center rounded-md  p-1 text-center text-xs`}
        >
            {toCapitalCase(selector)}
        </div>
    );
};

export default RangeSelectorComponent;
