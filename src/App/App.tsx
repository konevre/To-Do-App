import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useGetAllTodosQuery } from "../store/api/apiEndpoints/todoEndpoints";
import { saveTodos } from "../store/todoSlice";
import { useGetAllListsQuery } from "../store/api/apiEndpoints/listEndpoints";
import { saveTags } from "../store/tagSlice";
import { saveLists } from "../store/listSlice";
import { useGetAllTagsQuery } from "../store/api/apiEndpoints/tagEndpoints";

import spinner from "../resources/icons/spinner.svg";
import MenuComponent from "../components/Menu/MenuComponent";
import EditComponent from "../components/Task/EditComponent";
import LayoutComponent from "../components/Layout/LayoutComponent";
import TodayPage from "../Pages/TodayPage";
import UpcomingPage from "../Pages/UpcomingPage";
import WelcomePage from "../Pages/WelcomePage";
import StickyWallPage from "../Pages/StickyWallPage";
import CalendarPage from "../Pages/CalendarPage";
import ListsPage from "../Pages/ListsPage";
import TagsPage from "../Pages/TagsPage";
import SearchResultsPage from "../Pages/SearchResultsPage";
import Page404 from "../Pages/Page404";
const ModalComponent = lazy(() => import("../components/Modal/ModalComponent"));

const App = () => {
    const dispatch = useAppDispatch();

    const { data: todos = [], isLoading } = useGetAllTodosQuery();
    const { data: lists = [] } = useGetAllListsQuery();
    const { data: tags = [] } = useGetAllTagsQuery();

    useEffect(() => {
        dispatch(saveTodos(todos));
    }, [todos]);

    useEffect(() => {
        dispatch(saveLists(lists));
    }, [lists]);

    useEffect(() => {
        dispatch(saveTags(tags));
    }, [tags]);

    const { isModalOpen } = useAppSelector((state) => state.modal);
    return (
        <Router>
            {isLoading && (
                <div className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-neutral-500/10">
                    <img src={spinner} alt="spinner" className="h-24 w-24" />
                </div>
            )}
            <div className="relative h-full sm:flex sm:gap-x-3 lg:gap-x-5">
                <MenuComponent />
                <LayoutComponent>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/today" element={<TodayPage />} />
                        <Route path="/upcoming" element={<UpcomingPage />} />
                        <Route path="/notes" element={<StickyWallPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/lists/:id" element={<ListsPage />} />
                        <Route path="/tags/:id" element={<TagsPage />} />
                        <Route path="/search" element={<SearchResultsPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </LayoutComponent>

                <EditComponent />
            </div>
            <Suspense fallback={<Page404 />}>
                {isModalOpen && <ModalComponent />}
            </Suspense>
        </Router>
    );
};

export default App;
