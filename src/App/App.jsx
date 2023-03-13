import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuComponent from "../components/Menu/Menu.jsx";
import EditComponent from "../components/Task/EditComponent.jsx";
import LayoutComponent from "../components/Layout/LayoutComponent.jsx";

import TodayPage from "../Pages/TodayPage.jsx";
import UpcomingPage from "../Pages/UpcomingPage.jsx";
import WelcomePage from "../Pages/WelcomePage.jsx";
import StickyWallPage from "../Pages/StickyWallPage.jsx";
import CalendarPage from "../Pages/CalendarPage.jsx";
import ListsPage from "../Pages/ListsPage.jsx";
import TagsPage from "../Pages/TagsPage.jsx";
import SearchResultsPage from "../Pages/SearchResultsPage.jsx";
const ModalComponent = lazy(() =>
    import("../components/Modal/ModalComponent.jsx")
);

const App = () => {
    const { isModalOpen } = useSelector((state) => state.modal);
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
