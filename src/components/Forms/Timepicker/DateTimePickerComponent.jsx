import React, { useState } from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";

import xmark from "../../../resources/icons/xmark.svg";
import useLayout from "../../../hooks/useLayout.js";

import MonthPickerComponent from "./MonthPickerComponent.jsx";
import TimePickerComponent from "./TimePickerComponent.jsx";

const DateTimePickerComponent = ({ setFieldValue, values }) => {
    const [isOpen, setOpen] = useState(false);
    const { edit } = useSelector((state) => state.edit);

    const openPicker = () => {
        setOpen(true);
    };

    const closePicker = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="text-sm">Time</div>
            <div className="relative">
                <Field
                    name="date"
                    id="date"
                    onFocus={openPicker}
                    className="flex w-full cursor-default items-center rounded border border-neutral-300 bg-neutral-200 px-3.5 text-sm text-neutral-500"
                    readOnly
                    placeholder={edit?.task?.due_date || ""}
                />
                {isOpen ? (
                    <div className="absolute w-full bg-neutral-300 p-3">
                        <img
                            src={xmark}
                            alt="close"
                            className="ml-auto h-4 cursor-pointer"
                            onClick={closePicker}
                        />
                        <MonthPickerComponent
                            setFieldValue={setFieldValue}
                            values={values}
                        />
                        <TimePickerComponent
                            values={values}
                            setFieldValue={setFieldValue}
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default DateTimePickerComponent;
