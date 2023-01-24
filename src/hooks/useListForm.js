import { useState } from "react";
import * as Yup from "yup";

import { useCreateListMutation } from "../store/apiSlice";

const useListForm = () => {
    const [activeColor, setColor] = useState(4);
    const [createList] = useCreateListMutation();
    const initialState = { list: "" };
    const validationSchema = Yup.object({
        list: Yup.string()
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

    const onSubmit = (values, { resetForm }) => {
        const newList = {
            name: values.list,
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
    };
};

export default useListForm;
