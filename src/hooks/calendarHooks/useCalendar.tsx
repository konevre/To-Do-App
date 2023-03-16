import React from "react";
import { useMediaQuery } from "react-responsive";

import WeekComponent from "../../components/Calendar/WeekComponent";
import MonthComponent from "../../components/Calendar/MonthComponent";
import TodayComponent from "../../components/Calendar/TodayComponent";

import { showTodo } from "../../store/editSlice";
import { showMenu } from "../../store/menuSlice";

import useCalendarMonth from "./useCalendarMonth";
import useCalendarWeek from "./useCalendarWeek";
import useCalendarToday from "./useCalendarToday";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Todo } from "../../types";

const useCalendar = () => {
    const dispatch = useAppDispatch();
    const { activeState } = useAppSelector((state) => state.calendar);
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMenuOpen = useAppSelector((state) => state.menu.isMenuOpen);

    const onEvent = (event: Todo) => {
        if (isLessThan1024 && isMenuOpen) {
            dispatch(showMenu());
        }
        dispatch(showTodo(event));
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
