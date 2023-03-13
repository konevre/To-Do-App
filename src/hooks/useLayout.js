import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import { showMenu } from "../store/menuSlice";
import { closeEdit, showEdit } from "../store/editSlice";

const useLayout = () => {
    const dispatch = useDispatch();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isLessThan840 = useMediaQuery({ query: "(max-width: 840px)" });
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const { isMenuOpen } = useSelector((state) => state.menu);
    const { edit } = useSelector((state) => state.edit);
    const location = useLocation().pathname;
    const basis =
        isMenuOpen && edit.isOpen
            ? "sm:basis-5/12" // menu, main, task
            : isMenuOpen
            ? "absolute top-0 -z-10 translate-x-full delay-300 sm:block sm:static sm:basis-2/3 lg:basis-3/4 sm:z-0" // menu + main
            : edit.isOpen
            ? "absolute top-0 -z-10 -translate-x-full delay-300 sm:block sm:static sm:basis-1/2 lg:basis-2/3 sm:z-0" // main + task
            : "absolute top-0 z-10 translate-x-0 sm:basis-full sm:static lg:basis-full sm:z-0"; // main only

    const onMenu = () => {
        if (isLessThan1024 && edit.isOpen) {
            dispatch(closeEdit());
        }
        dispatch(showMenu());
    };

    const onEdit = () => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showEdit(null));
    };

    const isAllOpen = isMenuOpen && edit.isOpen && isMoreThan1024;

    return {
        isMenuOpen,
        edit,
        basis,
        onMenu,
        onEdit,
        isAllOpen,
        location,
        isMoreThan1024,
        isLessThan840,
    };
};

export default useLayout;
