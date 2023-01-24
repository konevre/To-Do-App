import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { useGetAllListsQuery } from "../../../store/apiSlice";

import useListForm from "../../../hooks/useListForm";

import plus from "../../../resources/icons/plus.svg";

import ListItemComponent from "./ListItemComponent.jsx";

const ListComponent = () => {
    const {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
    } = useListForm();
    const { data: lists, isSuccess } = useGetAllListsQuery();
    const [isNewList, setNewList] = useState(false);

    const onNewList = () => {
        setNewList(!isNewList);
    };

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

    return (
        <>
            <div className="mt-6 ml-3 text-xs font-semibold uppercase">
                Lists
            </div>
            <div className="mt-3 flex flex-col">
                {isSuccess &&
                    lists.map((list, i) => {
                        return <ListItemComponent key={i} list={list} />;
                    })}
                <div
                    className="flex h-10 cursor-pointer items-center rounded-lg px-5"
                    onClick={onNewList}
                >
                    <img src={plus} alt="upcoming" className="w-3" />
                    <div className="ml-2.5 text-sm font-normal">
                        Add New List
                    </div>
                </div>
                {isNewList && (
                    <div className="mt-3 rounded-lg border border-neutral-300 bg-neutral-200 p-3 ">
                        <Formik
                            initialValues={initialState}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <div className="flex items-center rounded-lg border border-neutral-300 p-3">
                                    <div
                                        className={`h-4 w-4 rounded ${colors[activeColor]}`}
                                    ></div>

                                    <Field
                                        name="list"
                                        type="text"
                                        placeholder="List Name"
                                        className="ml-2  w-full bg-neutral-200 px-3.5 text-sm text-neutral-500"
                                    ></Field>
                                </div>
                                <ErrorMessage
                                    component="div"
                                    name="list"
                                    className="mt-3 rounded-lg border border-red-500 p-2 text-center text-red-500"
                                />
                            </Form>
                        </Formik>

                        <div className="mt-4 flex justify-between">
                            {colorItems}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ListComponent;
