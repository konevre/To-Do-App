import React from "react";

import calendar from "../../resources/icons/calendar-x.svg";
import { List } from "../../types";

interface TaskExtraProps {
    dueDate: string;
    subLength: number;
    taskList: List;
}

const TaskExtraComponent: React.FC<TaskExtraProps> = ({
    dueDate,
    subLength,
    taskList,
}) => {
    return (
        <div className="col-span-3 col-start-2 ml-3 flex h-fit  flex-wrap gap-4 sm:gap-x-6">
            {dueDate.length > 0 && (
                <div className="flex items-center">
                    <img src={calendar} alt="subtask" className="h-4" />
                    <div className="ml-2 text-xs font-semibold text-neutral-600">
                        {dueDate}
                    </div>
                </div>
            )}
            {subLength > 0 && (
                <div className="flex items-center">
                    <div className="h-4 w-6 rounded bg-neutral-300 text-center text-xs font-semibold text-neutral-600">
                        {subLength}
                    </div>
                    <div className="ml-2 text-xs font-semibold text-neutral-600">
                        Subtasks
                    </div>
                </div>
            )}
            {taskList && (
                <div className="flex items-center">
                    <div
                        className={`h-4 w-4 rounded ${taskList.color} text-center text-xs font-semibold text-neutral-600`}
                    ></div>
                    <div className="ml-3 hidden text-xs font-semibold text-neutral-600 sm:block">
                        {taskList.name}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskExtraComponent;
