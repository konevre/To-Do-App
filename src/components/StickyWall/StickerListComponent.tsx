import React from "react";
import { Reorder } from "framer-motion";

import plus from "../../resources/icons/plus.svg";
import useStickers from "../../hooks/useStickers";
import { Sticker } from "../../types";

import StickerItemComponent from "./StickerItemComponent";

const StickerListComponent: React.FC = () => {
    const { stickers, setStickers, onNewSticker, hover, cols } = useStickers();

    return (
        <Reorder.Group
            values={stickers}
            as="div"
            onReorder={setStickers}
            className={`grid h-full auto-rows-fr grid-cols-1 gap-3 overflow-y-auto lg:auto-rows-stickers lg:grid-rows-stickers lg:gap-5 lg:rounded-lg lg:border lg:border-neutral-200 lg:p-6 2xl:grid-cols-4 ${cols}`}
        >
            {stickers &&
                stickers.map((item: Sticker) => {
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
    );
};

export default StickerListComponent;
