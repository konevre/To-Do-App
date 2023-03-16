import React from "react";
import { Field } from "formik";

import { FieldValues } from "../../../types";

const TimePickerComponent: React.FC<FieldValues> = ({
    setFieldValue,
    values,
}) => {
    const handleHourChange = (
        event: React.SyntheticEvent,
        name: "startHour" | "endHour"
    ) => {
        const { value } = event.currentTarget as HTMLInputElement;
        setFieldValue(name, value);
    };

    const handlePeriodChange = (
        event: React.SyntheticEvent,
        name: "startPeriod" | "endPeriod"
    ) => {
        const { value } = event.currentTarget as HTMLInputElement;
        setFieldValue(name, value);
    };

    return (
        <>
            <div className="mt-3 flex flex-row">
                <div className="flex basis-full items-center justify-center text-sm">
                    Start
                </div>
                <div className="flex basis-full items-center justify-center text-sm">
                    End
                </div>
            </div>
            <div className="mt-2 flex flex-row justify-between gap-x-2">
                <div className="flex basis-full flex-row flex-wrap justify-evenly rounded-md border border-neutral-400 py-1 px-1 sm:px-2">
                    <Field
                        type="number"
                        id="startHour"
                        className="bg-neutral-300 text-sm"
                        name="startHour"
                        min="1"
                        max="12"
                        onChange={(e: React.SyntheticEvent) =>
                            handleHourChange(e, "startHour")
                        }
                    />

                    <Field
                        as="select"
                        className="bg-neutral-300 text-sm"
                        id="period"
                        name="startPeriod"
                        onChange={(e: React.SyntheticEvent) =>
                            handlePeriodChange(e, "startPeriod")
                        }
                    >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </Field>
                </div>

                <div className="flex basis-full flex-row flex-wrap justify-evenly rounded-md border border-neutral-400 py-1 px-1 sm:px-2">
                    <Field
                        type="number"
                        id="hour"
                        className="bg-neutral-300 text-sm"
                        name="endHour"
                        min="1"
                        max="12"
                        onChange={(e: React.SyntheticEvent) =>
                            handleHourChange(e, "endHour")
                        }
                    />
                    <Field
                        as="select"
                        className="bg-neutral-300 text-sm"
                        id="period"
                        name="endPeriod"
                        onChange={(e: React.SyntheticEvent) =>
                            handlePeriodChange(e, "endPeriod")
                        }
                    >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </Field>
                </div>
            </div>
        </>
    );
};

export default TimePickerComponent;
