import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import ColorPicker from "../../components/ColorPicker/ColorPicker";
import { showSticker } from "../../store/editSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Sticker, TagColor } from "../../types";
import { updateSticker, addSticker } from "../../store/stickerSlice";

interface FormikValues {
    Sticker: string;
    descr: string;
}

const useStickerForm = () => {
    const colors: TagColor[] = [
        "bg-red-300",
        "bg-pink-300",
        "bg-purple-300",
        "bg-indigo-300",
        "bg-blue-300",
        "bg-emerald-300",
        "bg-yellow-300",
        "bg-orange-300",
    ];
    const { edit } = useAppSelector((state) => state.edit);
    const editObj = edit.sticker;
    const dispatch = useAppDispatch();

    const colorIndex = editObj ? colors.indexOf(editObj.color) : -1;
    const currentColor = editObj && colorIndex !== -1 ? colorIndex : 4;
    const [activeColor, setColor] = useState(currentColor);

    useEffect(() => {
        setColor(currentColor);
    }, [colorIndex]);

    const initialState = {
        Sticker: editObj ? editObj?.name : "",
        descr: editObj ? editObj?.description : "",
    };

    const validationSchema = Yup.object({
        Sticker: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Name field is required."),
        descr: Yup.string()
            .min(2, "Min 2 symbols")
            .required("Description field is required."),
    });

    const setActiveColor = (i: number) => {
        setColor(i);
    };

    const colorItems = (
        <ColorPicker
            setActiveColor={setActiveColor}
            colors={colors}
            activeColor={activeColor}
        />
    );

    const onUpdate = (newSticker: Sticker) => {
        dispatch(showSticker(newSticker));
        dispatch(updateSticker(newSticker));
    };

    const onAdd = (newSticker: Sticker) => {
        dispatch(addSticker(newSticker));
    };

    const onSubmit = (
        values: FormikValues,
        { resetForm }: FormikHelpers<FormikValues>
    ) => {
        const newSticker = {
            id: editObj?.id || uuidv4(),
            name: values.Sticker,
            description: values.descr,
            color: colors[activeColor],
        };

        editObj ? onUpdate(newSticker) : onAdd(newSticker);
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
