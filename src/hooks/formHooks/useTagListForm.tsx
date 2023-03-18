import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormikHelpers } from "formik";

import * as Yup from "yup";

import ColorPicker from "../../components/ColorPicker/ColorPicker";
import { useCreateTagMutation } from "../../store/api/apiEndpoints/tagEndpoints";
import { useCreateListMutation } from "../../store/api/apiEndpoints/listEndpoints";

import { ListColor, TagColor, Tag, List } from "../../types";

type FormikValues = { Tag: "" } | { List: "" };

const useTagListForm = (name: "Tag" | "List") => {
    const [activeColor, setColor] = useState(4);
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

    // TODO - сделать ListColors interface
    const tagColors: TagColor[] = [
        "bg-red-300",
        "bg-pink-300",
        "bg-purple-300",
        "bg-indigo-300",
        "bg-blue-300",
        "bg-emerald-300",
        "bg-yellow-300",
        "bg-orange-300",
    ];
    const listColors: ListColor[] = [
        "bg-red-400",
        "bg-fuchsia-400",
        "bg-violet-400",
        "bg-blue-500",
        "bg-sky-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-amber-500",
    ];

    const setActiveColor = (i: number) => {
        setColor(i);
    };

    const colorItems = (
        <ColorPicker
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
    };
};

export default useTagListForm;
