import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MenuComponent from "../components/Menu/Menu";
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
import { useAppSelector } from "../store/hooks";
const ModalComponent = lazy(() => import("../components/Modal/ModalComponent"));

const App = () => {
    const { isModalOpen } = useAppSelector((state) => state.modal);
    return (
        <Router>
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
                    </Routes>
                </LayoutComponent>

                <EditComponent />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {isModalOpen && <ModalComponent />}
            </Suspense>
        </Router>
    );
};

export default App;
