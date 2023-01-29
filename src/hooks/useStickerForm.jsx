import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import {
    useCreateStickerMutation,
    useUpdateStickerMutation,
} from "../store/apiSlice";

const useStickerForm = () => {
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
    const { isEditOpen } = useSelector((state) => state.edit);
    const editObj = isEditOpen.sticker;

    const colorIndex = editObj ? colors.indexOf(editObj.color) : -1;
    const currentColor = editObj && colorIndex !== -1 ? colorIndex : 4;
    const [activeColor, setColor] = useState(currentColor);

    useEffect(() => {
        setColor(currentColor);
    }, [colorIndex]);

    const [createSticker] = useCreateStickerMutation();
    const [updateSticker] = useUpdateStickerMutation();

    const initialState = {
        Sticker: editObj ? editObj.name : "",
        descr: editObj ? editObj.description : "",
    };

    const validationSchema = Yup.object({
        Sticker: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Name field is required."),
        descr: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Description field is required."),
    });

    const colorItems = colors.map((color, i) => {
        const active =
            i === activeColor ? "rounded border border-neutral-300" : "";
        return (
            <div
                key={i}
                className={`p-1.5 ${active}`}
                onClick={() => setColor(i)}
            >
                <div className={`h-4 w-4 rounded ${color}`}></div>
            </div>
        );
    });

    const onSubmit = (values, { resetForm }) => {
        const newSticker = {
            id: editObj?.id || uuidv4(),
            name: values.Sticker,
            description: values.descr,
            color: colors[activeColor],
        };

        editObj ? updateSticker(newSticker) : createSticker(newSticker);
        resetForm();
    };

    const selectedColor = colors[activeColor];

    return {
        selectedColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colorItems,
    };
};

export default useStickerForm;
