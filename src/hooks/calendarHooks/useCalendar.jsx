import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import WeekComponent from "../../components/Calendar/WeekComponent.jsx";
import MonthComponent from "../../components/Calendar/MonthComponent.jsx";
import TodayComponent from "../../components/Calendar/TodayComponent.jsx";

import { showEdit } from "../../store/editSlice.js";
import { showMenu } from "../../store/menuSlice.js";

import useCalendarMonth from "./useCalendarMonth.js";
import useCalendarWeek from "./useCalendarWeek.js";
import useCalendarToday from "./useCalendarToday.js";

const useCalendar = () => {
    const { activeState } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

    const onEvent = (event) => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showEdit(event));
    };

    const { todayTitle } = useCalendarToday();
    const { weekTitle } = useCalendarWeek();
    const { monthTitle } = useCalendarMonth();

    const selectors = {
        day: <TodayComponent />,
        week: <WeekComponent />,
        month: <MonthComponent />,
    };

    const titles = {
        day: todayTitle,
        week: weekTitle,
        month: monthTitle,
    };

    const activeTitle = titles[activeState];
    const activeFilter = selectors[activeState];

    return {
        activeTitle,
        activeFilter,
        onEvent,
    };
};

export default useCalendar;
