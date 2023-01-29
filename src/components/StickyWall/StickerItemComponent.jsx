import React from "react";
import { Reorder } from "framer-motion";
import { useDispatch } from "react-redux";

import edit from "../../resources/icons/pen-to-square.svg";
import { showSticker } from "../../store/editSlice";

const StickerItemComponent = ({ item }) => {
    const { name, description, color } = item;
    const dispatch = useDispatch();
    return (
        <Reorder.Item
            whileDrag={{ scale: 1.1 }}
            as="div"
            value={item}
            drag
            className={`${color} flex flex-col overflow-y-auto rounded-lg p-5 shadow-md shadow-neutral-300 last:mb-3`}
        >
            <div className="flex justify-between">
                <div className="text-sm font-semibold sm:text-lg">{name}</div>

                <img
                    src={edit}
                    alt="edit"
                    className="h-4 cursor-pointer"
                    onClick={() => dispatch(showSticker(item))}
                />
            </div>
            <div className="mt-2 text-xs sm:text-sm">{description}</div>
        </Reorder.Item>
    );
};

export default StickerItemComponent;
