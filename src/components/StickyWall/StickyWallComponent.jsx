import React, { useState } from "react";
import { Reorder } from "framer-motion";

import useGetStickers from "../../hooks/useGetStickers.js";
import plus from "../../resources/icons/plus.svg";
import HeaderComponent from "../Header/HeaderComponent.jsx";
import useStickerForm from "../../hooks/useStickerForm.js";
import TagListFormComponent from "../Forms/TagListFormComponent.jsx";

import StickerItemComponent from "./StickerItemComponent.jsx";

const StickyWallComponent = () => {
    const { stickers, setStickers } = useGetStickers();
    const [newSticker, setNewSticker] = useState(false);

    const showForm = () => {
        setNewSticker(true);
    };
    const closeForm = () => {
        setNewSticker(false);
    };

    const {
        activeColor,
        setColor,
        initialState,
        validationSchema,
        onSubmit,
        colors,
    } = useStickerForm();

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

    const hover = newSticker
        ? "h-fit"
        : "hover:bg-neutral-300 hover:shadow-lg h-full";

    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title="Sticky Wall" />
            <Reorder.Group
                values={stickers}
                as="div"
                onReorder={setStickers}
                className="grid h-full grid-cols-1 gap-3 overflow-y-auto lg:auto-rows-stickers lg:grid-cols-3 lg:grid-rows-stickers lg:gap-5 lg:rounded-lg lg:border lg:border-neutral-200 lg:p-6 2xl:grid-cols-4"
            >
                {stickers &&
                    stickers.map((item) => {
                        console.log(item);
                        return (
                            <StickerItemComponent
                                key={item.id}
                                value={item}
                                item={item}
                            />
                        );
                    })}
                <div
                    onClick={showForm}
                    className={`${hover} hidden items-center justify-center  rounded-lg bg-neutral-200 p-5 shadow-md shadow-neutral-300 lg:flex`}
                >
                    {newSticker ? (
                        <div className="h-full w-full">
                            <TagListFormComponent
                                name="Sticker"
                                initialState={initialState}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                                activeColor={colors[activeColor]}
                                colorItems={colorItems}
                            />
                        </div>
                    ) : (
                        <img src={plus} alt="add_sticker" className="h-1/4" />
                    )}
                </div>
            </Reorder.Group>
        </div>
    );
};

export default StickyWallComponent;
