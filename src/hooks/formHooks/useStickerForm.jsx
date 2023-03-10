import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
    useCreateStickerMutation,
    useUpdateStickerMutation,
} from "../../store/apiSlice";

import ColorPicker from "../../components/ColorPicker/ColorPicker.jsx";
import { showSticker } from "../../store/editSlice.js";

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
    const { edit } = useSelector((state) => state.edit);
    const editObj = edit.sticker;
    const dispatch = useDispatch();

    const colorIndex = editObj ? colors.indexOf(editObj.color) : -1;
    const currentColor = editObj && colorIndex !== -1 ? colorIndex : 4;
    const [activeColor, setColor] = useState(currentColor);
    useEffect(() => {
        setColor(currentColor);
    }, [colorIndex]);

    const [createSticker] = useCreateStickerMutation();
    const [updateSticker] = useUpdateStickerMutation();

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

    const colorItems = (
        <ColorPicker
            setColor={setColor}
            colors={colors}
            activeColor={activeColor}
        />
    );

    const onUpdate = (newSticker) => {
        dispatch(showSticker(newSticker));
        updateSticker(newSticker);
    };

    const onSubmit = (values, { resetForm }) => {
        const newSticker = {
            id: editObj?.id || uuidv4(),
            name: values.Sticker,
            description: values.descr,
            color: colors[activeColor],
        };

        editObj ? onUpdate(newSticker) : createSticker(newSticker);
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
