import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import { showMenu } from "../store/menuSlice";
import { closeEdit, showEdit } from "../store/editSlice";

const useLayout = () => {
    const dispatch = useDispatch();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMoreThan1024 = useMediaQuery({ query: "(min-width: 1024px)" });
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
    const { isEditOpen } = useSelector((state) => state.edit);
    const location = useLocation().pathname;

    const onMenu = () => {
        if (isLessThan1024 && isEditOpen.isOpen) {
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

    const isAllOpen = isMenuOpen && isEditOpen.isOpen && isMoreThan1024;

    return {
        isMenuOpen,
        isEditOpen,
        onMenu,
        onEdit,
        isAllOpen,
        location,
        isMoreThan1024,
    };
};

export default useLayout;
