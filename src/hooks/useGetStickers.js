import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showSticker } from "../store/editSlice";
import { saveStickers } from "../store/stickerSlice";
import { useGetAllStickersQuery } from "../store/apiSlice";

import useLayout from "./useLayout";

const useGetStickers = () => {
    const { data, isSuccess } = useGetAllStickersQuery();
    const { stickers } = useSelector((state) => state.stickers);
    const dispatch = useDispatch();
    const { isAllOpen, isMoreThan1024 } = useLayout();
    const cols =
        isAllOpen && isMoreThan1024 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    const hover = "hover:bg-neutral-300 hover:shadow-lg h-full";

    useEffect(() => {
        if (isSuccess) dispatch(saveStickers(data));
    }, [data]);

    const onNewSticker = () => {
        dispatch(showSticker(null));
    };

    const setStickers = (state) => {
        dispatch(saveStickers(state));
    };

    return { stickers, setStickers, onNewSticker, hover, cols };
};

export default useGetStickers;
