import React from "react";
import { Reorder } from "framer-motion";

const StickerItemComponent = ({ item }) => {
    const { name, description, color } = item;
    return (
        <Reorder.Item
            whileDrag={{ scale: 1.1 }}
            as="div"
            value={item}
            drag
            className={`${color} flex flex-col overflow-y-auto rounded-lg p-5 shadow-md shadow-neutral-300 last:mb-3`}
        >
            <div className="text-sm font-semibold sm:text-lg">{name}</div>
            <div className="mt-2 text-xs sm:text-sm">{description}</div>
        </Reorder.Item>
    );
};

export default StickerItemComponent;
