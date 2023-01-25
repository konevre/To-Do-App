import { useState } from "react";
import * as Yup from "yup";

import { useCreateTagMutation } from "../store/apiSlice";

const useTagForm = () => {
    const [activeColor, setColor] = useState(4);
    const [createTag] = useCreateTagMutation();
    const initialState = { Tag: "" };
    const validationSchema = Yup.object({
        Tag: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Name field is required."),
    });
    const colors = [
        "bg-red-300",
        "bg-pink-300",
        "bg-purple-300",
        "bg-indigo-300",
        "bg-blue-300",
        "bg-emerald-300",
        "bg-yellow-300",
        "bg-orange-300",
    ];

    const onSubmit = (values, { resetForm }) => {
        const newTag = {
            name: values.Tag,
            color: colors[activeColor],
        };
        createTag(newTag);
        resetForm();
    };

    return {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
    };
};

export default useTagForm;
