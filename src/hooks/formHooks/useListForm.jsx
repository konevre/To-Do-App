import React, { useState } from "react";
import * as Yup from "yup";

import ColorPicker from "../../components/ColorPicker/ColorPicker.jsx";

import { useCreateListMutation } from "../../store/apiSlice";

const useListForm = () => {
    const [activeColor, setColor] = useState(4);
    const [createList] = useCreateListMutation();
    const initialState = { List: "" };
    const validationSchema = Yup.object({
        List: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Name field is required."),
    });
    const colors = [
        "bg-red-400",
        "bg-fuchsia-400",
        "bg-violet-400",
        "bg-blue-500",
        "bg-sky-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-amber-500",
    ];

    const colorItems = (
        <ColorPicker
            setColor={setColor}
            colors={colors}
            activeColor={activeColor}
        />
    );

    const onSubmit = (values, { resetForm }) => {
        const newList = {
            name: values.List,
            color: colors[activeColor],
        };
        createList(newList);
        resetForm();
    };

    return {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
        colorItems,
    };
};

export default useListForm;
