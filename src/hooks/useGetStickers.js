import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveStickers } from "../store/stickerSlice";
import { useGetAllStickersQuery } from "../store/apiSlice";

const useGetStickers = () => {
    const { data, isSuccess } = useGetAllStickersQuery();
    const { stickers } = useSelector((state) => state.stickers);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) dispatch(saveStickers(data));
    }, [data]);

    const setStickers = (state) => {
        dispatch(saveStickers(state));
    };

    return { stickers, setStickers };
};

export default useGetStickers;
