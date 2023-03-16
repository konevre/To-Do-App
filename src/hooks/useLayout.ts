import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import { showMenu } from "../store/menuSlice";
import { closeEdit, makeEditNull } from "../store/editSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface LayoutHook {
    isMenuOpen: boolean;
    isEditOpen: boolean;
    basis: string;
    onMenu: () => void;
    onEdit: () => void;
    isAllOpen: boolean;
    location: string;
    isMoreThan1024: boolean;
    isLessThan840: boolean;
}

const useLayout = (): LayoutHook => {
    const dispatch = useAppDispatch();
    const isLessThan1024: boolean = useMediaQuery({
        query: "(max-width: 1024px)",
    });
    const isLessThan840: boolean = useMediaQuery({
        query: "(max-width: 840px)",
    });
    const isMoreThan1024: boolean = useMediaQuery({
        query: "(min-width: 1024px)",
    });
    const { isMenuOpen } = useAppSelector((state) => state.menu);
    const { edit } = useAppSelector((state) => state.edit);
    const location: string = useLocation().pathname;
    const isEditOpen: boolean = edit.isOpen;
    const basis =
        isMenuOpen && isEditOpen
            ? "sm:basis-5/12" // menu, main, task
            : isMenuOpen
            ? "absolute top-0 -z-10 translate-x-full delay-300 sm:block sm:static sm:basis-2/3 lg:basis-3/4 sm:z-0" // menu + main
            : isEditOpen
            ? "absolute top-0 -z-10 -translate-x-full delay-300 sm:block sm:static sm:basis-1/2 lg:basis-2/3 sm:z-0" // main + task
            : "absolute top-0 z-10 translate-x-0 sm:basis-full sm:static lg:basis-full sm:z-0"; // main only

    const onMenu = (): void => {
        if (isLessThan1024 && isEditOpen) {
            dispatch(closeEdit());
        }
        dispatch(showMenu());
    };

    const onEdit = (): void => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(makeEditNull());
    };

    const isAllOpen: boolean = isMenuOpen && isEditOpen && isMoreThan1024;

    return {
        isMenuOpen,
        isEditOpen,
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
