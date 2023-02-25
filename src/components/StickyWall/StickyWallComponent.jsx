import React from "react";
import { Reorder } from "framer-motion";

import useGetStickers from "../../hooks/useGetStickers.js";
import plus from "../../resources/icons/plus.svg";
import HeaderComponent from "../Header/HeaderComponent.jsx";
import useLayout from "../../hooks/useLayout.js";

import StickerItemComponent from "./StickerItemComponent.jsx";

const StickyWallComponent = () => {
    const { stickers, setStickers, onNewSticker } = useGetStickers();
    const { isAllOpen, isMoreThan1024 } = useLayout();
    const cols =
        isAllOpen && isMoreThan1024 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    const hover = "hover:bg-neutral-300 hover:shadow-lg h-full";

    return (
        <div className="flex h-full flex-col">
            <HeaderComponent title="Sticky Wall" number={0} />
            <Reorder.Group
                values={stickers}
                as="div"
                onReorder={setStickers}
                className={`grid h-full auto-rows-fr grid-cols-1 gap-3 overflow-y-auto lg:auto-rows-stickers lg:grid-rows-stickers lg:gap-5 lg:rounded-lg lg:border lg:border-neutral-200 lg:p-6 2xl:grid-cols-4 ${cols}`}
            >
                {stickers &&
                    stickers.map((item) => {
                        return (
                            <StickerItemComponent
                                key={item.id}
                                value={item}
                                item={item}
                            />
                        );
                    })}
                <div
                    onClick={onNewSticker}
                    className={`${hover} hidden items-center justify-center rounded-lg bg-neutral-200 p-5 shadow-md shadow-neutral-300 lg:flex`}
                >
                    <img src={plus} alt="add_sticker" className="h-8" />
                </div>
            </Reorder.Group>
        </div>
    );
};

export default StickyWallComponent;
