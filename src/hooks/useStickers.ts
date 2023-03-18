import { showSticker } from "../store/editSlice";
import { reorderSticker } from "../store/stickerSlice";

import useLayout from "./useLayout";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Sticker } from "../types";

const useStickers = () => {
    const dispatch = useAppDispatch();
    const { stickers } = useAppSelector((state) => state.stickers);
    const { isAllOpen, isMoreThan1024 } = useLayout();
    const cols =
        isAllOpen && isMoreThan1024 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    const hover = "hover:bg-neutral-300 hover:shadow-lg h-full";

    const onNewSticker = () => {
        dispatch(showSticker(null));
    };

    const setStickers = (state: Sticker[]) => {
        dispatch(reorderSticker(state));
    };

    return { stickers, setStickers, onNewSticker, hover, cols };
};

export default useStickers;
