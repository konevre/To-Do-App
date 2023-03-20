import React from "react";
import { ErrorMessage } from "formik";

interface ICustomErrorMessage {
    name: string;
    style?: string;
}

const CustomErrorMessageComponent: React.FC<ICustomErrorMessage> = ({
    name,
    style,
}) => {
    return (
        <ErrorMessage
            component="div"
            name={name}
            className={`${style} mt-3 rounded-lg border border-red-500 p-2 text-center text-red-500`}
        />
    );
};

export default CustomErrorMessageComponent;
