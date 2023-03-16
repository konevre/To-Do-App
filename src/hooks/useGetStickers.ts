import { useEffect } from "react";

import { makeEditNull } from "../store/editSlice";
import { saveStickers } from "../store/stickerSlice";
import { useGetAllStickersQuery } from "../store/apiSlice";

import useLayout from "./useLayout";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Sticker } from "../types";

const useGetStickers = () => {
    const { data, isSuccess } = useGetAllStickersQuery();
    const { stickers } = useAppSelector((state) => state.stickers);
    const dispatch = useAppDispatch();
    const { isAllOpen, isMoreThan1024 } = useLayout();
    const cols =
        isAllOpen && isMoreThan1024 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    const hover = "hover:bg-neutral-300 hover:shadow-lg h-full";

    useEffect(() => {
        if (isSuccess) dispatch(saveStickers(data));
    }, [data]);

    const onNewSticker = () => {
        dispatch(makeEditNull());
    };

    const setStickers = (state: Sticker[]) => {
        dispatch(saveStickers(state));
    };

    return { stickers, setStickers, onNewSticker, hover, cols };
};

export default useGetStickers;
