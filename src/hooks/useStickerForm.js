import { useState } from "react";
import * as Yup from "yup";

import { useCreateStickerMutation } from "../store/apiSlice";

const useStickerForm = () => {
    const [activeColor, setColor] = useState(4);
    const [createSticker] = useCreateStickerMutation();
    const initialState = { Sticker: "", descr: "" };

    const validationSchema = Yup.object({
        Sticker: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Name field is required."),
        descr: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Description field is required."),
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
        const newSticker = {
            name: values.Sticker,
            description: values.descr,
            color: colors[activeColor],
        };
        createSticker(newSticker);
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

export default useStickerForm;
