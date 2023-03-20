import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormikHelpers } from "formik";

import * as Yup from "yup";

import ColorPickerComponent from "../../components/ColorPicker/ColorPickerComponent";
import { useCreateTagMutation } from "../../store/api/apiEndpoints/tagEndpoints";
import { useCreateListMutation } from "../../store/api/apiEndpoints/listEndpoints";

import { Tag, List } from "../../types";
import { tagColors, listColors } from "../../utils/colors";

type FormikValues = { Tag: "" } | { List: "" };

const useTagListForm = (name: "Tag" | "List") => {
    const [activeColor, setColor] = useState<number>(4);
    const [createList] = useCreateListMutation();
    const [createTag] = useCreateTagMutation();

    let initialState: FormikValues;
    if (name === "Tag") {
        initialState = { Tag: "" };
    } else {
        initialState = { List: "" };
    }

    const validationSchema =
        name === "Tag"
            ? Yup.object({
                  Tag: Yup.string()
                      .min(2, "Min 2 symbols")
                      .required("Name field is required."),
              })
            : Yup.object({
                  List: Yup.string()
                      .min(2, "Min 2 symbols")
                      .required("Name field is required."),
              });

    const setActiveColor = (i: number) => {
        setColor(i);
    };

    const colorItems = (
        <ColorPickerComponent
            setActiveColor={setActiveColor}
            colors={name === "Tag" ? tagColors : listColors}
            activeColor={activeColor}
        />
    );

    const onSubmit = (
        values: FormikValues,
        { resetForm }: FormikHelpers<FormikValues>
    ) => {
        const newObj =
            "Tag" in values
                ? {
                      id: uuidv4(),
                      name: values.Tag,
                      color: tagColors[activeColor],
                  }
                : {
                      id: uuidv4(),
                      name: values.List,
                      color: listColors[activeColor],
                  };
        name === "Tag" ? createTag(newObj as Tag) : createList(newObj as List);
        resetForm();
    };

    return {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colorItems,
    } as const;
};

export default useTagListForm;
