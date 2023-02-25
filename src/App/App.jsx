import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MenuComponent from "../components/Menu/Menu.jsx";
import EditComponent from "../components/Task/EditComponent.jsx";

import TodayPage from "../Pages/TodayPage.jsx";
import UpcomingPage from "../Pages/UpcomingPage.jsx";
import WelcomePage from "../Pages/WelcomePage.jsx";
import StickyWallPage from "../Pages/StickyWallPage.jsx";
import CalendarPage from "../Pages/CalendarPage.jsx";
import ListsPage from "../Pages/ListsPage.jsx";
import TagsPage from "../Pages/TagsPage.jsx";
import SearchResultsPage from "../Pages/SearchResultsPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="relative h-full sm:flex sm:gap-x-3 lg:gap-x-5">
                <MenuComponent />
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
                <EditComponent />
            </div>
        </Router>
    );
};

export default App;
