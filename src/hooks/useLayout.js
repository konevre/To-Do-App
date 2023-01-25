import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { showMenu } from "../store/menuSlice";
import { closeTodo, showTask } from "../store/todoSlice";

const useLayout = () => {
    const dispatch = useDispatch();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
    const { isTodoOpen } = useSelector((state) => state.tasks);

    const onMenu = () => {
        if (isLessThan1024 && isTodoOpen[0]) {
            dispatch(closeTodo());
        }
        dispatch(showMenu());
    };

    const onTask = () => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showTask(null));
    };

    return { isMenuOpen, isTodoOpen, onMenu, onTask };
};

export default useLayout;
